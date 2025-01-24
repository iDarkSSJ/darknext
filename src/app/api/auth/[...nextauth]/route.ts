import NextAuth from "next-auth"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseKey = process.env.SUPABASE_ANON_KEY as string
const supabaseSecret = process.env.SUPABASE_JWT_SECRET as string

const supabase = createClient(supabaseUrl, supabaseKey)

const handler = NextAuth({
  adapter: SupabaseAdapter({
    url: supabaseUrl,
    secret: supabaseSecret,
  }),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const { data: user } = await supabase
          .from("users")
          .select("*")
          .eq("email", credentials.email)
          .single()

        if (!user) throw new Error("Invalid credentials")

        const passwordMatch = await bcrypt.compare(credentials.password, user.password)

        if (!passwordMatch) throw new Error("Invalid credentials")

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  pages: {
    signIn: "/register",
  },
  session: {
    strategy: "jwt",
    maxAge: 1000 * 60 * 60 * 24 * 30,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.email = token.email as string
        session.user.id = token.sub as string
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }