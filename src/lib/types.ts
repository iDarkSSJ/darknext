export const CONSOLES = [
  { path: "nes", label: "NES" },
  { path: "snes", label: "SNES" },
  { path: "gb", label: "GameBoy" },
  { path: "gbc", label: "GameBoy Color" },
  { path: "gba", label: "GameBoy Advance" },
  { path: "sega-genesis", label: "Sega Genesis" },
]

export type Game = {
  id: number
  title: string
  image: string;
  core: string
}

export const games: Game[] = [
  {
    id: 1,
    title: "Super Mario Bros",
    image: "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg",
    core: "nes"
  },
  {
    id: 2,
    title: "Super Mario Bros 2",
    image: "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg",
    core: "nes"
  },
  {
    id: 3,
    title: "Super Mario Bros 3",
    image: "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg",
    core: "nes"
  },
  {
    id: 4,
    title: "The Legend of Zelda: A Link to the Past",
    image: "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg",
    core: "snes"
  },
  {
    id: 5,
    title: "Zelda II: The Adventure of Link",
    image: "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg",
    core: "gbc"
  },
  {
    id: 6,
    title: "Legend of Zelda: Minish Cap",
    image: "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg",
    core: "gba"
  },
  {
    id: 7,
    title: "Metroid",
    image: "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg",
    core: "gb"
  },
  {
    id: 8,
    title: "Tetris",
    image: "https://rehabconceptspt.com/wp-content/uploads/2016/06/placeholder-640-square.jpg",
    core: "gba"
  }
]
