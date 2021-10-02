import { FC } from 'react'
import useSWR, { useSWRConfig } from 'swr'

import { PlaylistDetailTemplate } from 'templates'
import { getPlaylistTracks } from 'lib/spotify'

type Props = {
  playlistId: string
}

const PlaylistDetailContainer: FC<Props> = (props) => {
  const { playlistId } = props

  const { cache } = useSWRConfig()
  const auth = cache.get('/api/auth/checkLogin')
  const token = auth.accessToken

  const currentPlaylist = useSWR(`${playlistId}`, () => getPlaylistTracks(token, `playlists/${playlistId}`))

  if (currentPlaylist.isValidating) return <>Loading...</>

  return <PlaylistDetailTemplate playlist={currentPlaylist.data} />
}

export default PlaylistDetailContainer
