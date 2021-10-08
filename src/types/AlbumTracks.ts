export type AlbumTracks = {
  album_type: 'album'
  artists: {
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    name: string
    type: 'artist'
    uri: string
  }[]
  available_markets: string[]
  copyrights: {
    text: 'string'
    type: string
  }[]
  external_ids: {
    upc: '5099749994324'
  }
  external_urls: {
    spotify: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj'
  }
  genres: []
  href: 'https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj'
  id: '0sNOF9WDwhWunNAHPD3Baj'
  images: {
    height: number
    url: string
    width: number
  }[]
  name: string
  popularity: number
  release_date: string
  release_date_precision: string
  tracks: {
    href: string
    items: {
      artists: {
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        name: string
        type: 'artist'
        uri: string
      }[]
      available_markets: string[]
      disc_number: number
      duration_ms: number
      explicit: boolean
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      name: string
      preview_url: string
      track_number: number
      type: 'track'
      uri: string
    }[]
    limit: number
    next: string | null
    offset: string
    previous: string | null
    total: number
  }
  type: 'album'
  uri: string
}
