import { FC } from 'react'
import useSWR, { useSWRConfig } from 'swr'

import { LibraryTemplate } from 'templates'
import { getDataItems, getData } from 'lib/spotify'

const LibraryContainer: FC = () => {
  const { cache } = useSWRConfig()
  const auth = cache.get('/api/auth/checkLogin')
  const user = cache.get('user')
  const token = auth.accessToken

  console.log(token)
  const userPlaylist = useSWR('userPlaylists', () => getDataItems(token, 'me/playlists'))
  const savedTracks = useSWR('savedTracks', () => getDataItems(token, 'me/tracks?limit=50'))

  if (userPlaylist.isValidating || savedTracks.isValidating) return <>Loading...</>

  console.log(savedTracks)

  return (
    <>
      <LibraryTemplate tracks={savedTracks.data} playlist={userPlaylist.data} />
    </>
  )
}

export default LibraryContainer
