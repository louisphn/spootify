import { FC } from 'react'
import useSWR, { useSWRConfig } from 'swr'

import { PlaylistDetailTemplate } from 'templates'
import { getPlaylistTracks } from 'lib/spotify'

type Props = {
  playlistId: string
  type: 'album' | 'playlist'
}

const PlaylistDetailContainer: FC<Props> = (props) => {
  const { playlistId, type } = props

  const { cache } = useSWRConfig()
  const auth = cache.get('/api/auth/checkLogin')
  const token = auth.accessToken

  const currentPlaylist = useSWR(`${playlistId}`, () => getPlaylistTracks(token, `${type}s/${playlistId}`))

  if (currentPlaylist.isValidating) return <>Loading...</>

  return <PlaylistDetailTemplate playlist={currentPlaylist.data} type={type} />
}

export default PlaylistDetailContainer
