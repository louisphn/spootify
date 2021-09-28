export type TrackItem = {
  album: { href: string; name: string; images: { url: string; height: number }[] }
  artists: { href: string; name: string }[]
  href: string
  id: string
  name: string
  uri: string
  duration_ms: number
}
