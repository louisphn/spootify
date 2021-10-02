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
    url: string
  }[]
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
    next: string
    offset: number
    previous: null
    total: number
  }
  type: string
  uri: string
}
