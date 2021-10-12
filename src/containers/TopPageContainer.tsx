import { FC, useEffect } from 'react'
import { useAtom } from 'jotai'
import useSWR, { useSWRConfig } from 'swr'

import { TopPageTemplate } from 'templates'
import { makeRequest, getDataItems, getNowPlaying } from 'lib/spotify'
import { nowPlaying } from 'contexts/NowPlaying'

const TopPageContainer: FC = () => {
  const { cache } = useSWRConfig()
  const [currentPlaying, setCurrentPlaying] = useAtom(nowPlaying)

  const auth = cache.get('/api/auth/checkLogin')
  const user = cache.get('user')
  const token = auth.accessToken

  const userPlaylist = useSWR('userPlaylists', () => getDataItems(token, 'me/playlists'), { revalidateOnFocus: false })
  const featuredPlaylist = useSWR('featuredPlaylists', () => makeRequest(token, 'featured-playlists', 'playlists'), {
    revalidateOnFocus: false,
  })
  const isPlaying = useSWR('nowPlaying', () => getNowPlaying(token))

  useEffect(() => {
    if (!isPlaying.isValidating && isPlaying.data !== undefined) {
      setCurrentPlaying(isPlaying.data.uri)
    }
  }, [isPlaying])

  if (userPlaylist.isValidating || featuredPlaylist.isValidating || isPlaying.isValidating) return <>Loading...</>

  return (
    <>
      <TopPageTemplate
        featuredPlaylist={featuredPlaylist.data}
        myPlaylist={userPlaylist.data}
        username={user.display_name}
      />
    </>
  )
}

export default TopPageContainer
