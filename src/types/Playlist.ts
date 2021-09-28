export type Playlist = {
  collaborative: boolean
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: { height: null; url: string; width: null }[]
  name: string
  owner: {
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    type: string
    uri: string
  }
  public: boolean
  snapshot_id: string
  tracks: {
    href: string
    total: 30
  }
  type: string
  uri: string
}
