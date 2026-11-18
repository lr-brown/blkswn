import { ICONS } from "./icons"

export type Album = {
  cover: string
  link: string
  alt: string
}

export type Project = {
  title: string
  logo: string
  screenshots: string[]
  alt: string
  icons: ICONS[]
  description: Record<string, string>
  /** Only highlighted projects have cover images. */
  cover?: string[]
  github?: string
  external?: string
}

export type Assets = {
  albums: Album[]
  highlights: Record<string, Project>
  others: Record<string, Project>
}
