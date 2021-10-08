import { TrackItem } from 'types/Track'

export type PlaylistTracks = {
  collaborative: boolean
  description: string
  external_urls: {
    spotify: string
  }
  followers: {
    href: null
    total: number
  }
  href: string
  id: string
  images: {
    height: number | null
    url: string
    width: number | null
  }[]
  name: string
  owner: {
    display_name: string
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    type: string
    uri: string
  }
  primary_color: string | null
  public: null
  snapshot_id: string
  tracks: {
    href: string
    items: {
      added_at: '2014-09-01T04:21:28Z'
      added_by: {
        external_urls: {
          spotify: 'http://open.spotify.com/user/spotify'
        }
        href: 'https://api.spotify.com/v1/users/spotify'
        id: 'spotify'
        type: 'user'
        uri: 'spotify:user:spotify'
      }
      is_local: false
      track: TrackItem
    }[]
    limit: number
    next: string | null
    offset: number
    previous: string | null
    total: number
  }
  type: string
  uri: string
}
