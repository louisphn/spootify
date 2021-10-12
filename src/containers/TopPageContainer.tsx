import { FC } from 'react'
import useSWR, { useSWRConfig } from 'swr'

import { TopPageTemplate } from 'templates'
import { makeRequest, getDataItems } from 'lib/spotify'

const TopPageContainer: FC = () => {
  const { cache } = useSWRConfig()
  const auth = cache.get('/api/auth/checkLogin')
  const user = cache.get('user')
  const token = auth.accessToken

  const userPlaylist = useSWR('userPlaylists', () => getDataItems(token, 'me/playlists'))
  const featuredPlaylist = useSWR('featuredPlaylists', () => makeRequest(token, 'featured-playlists', 'playlists'))

  if (userPlaylist.isValidating || featuredPlaylist.isValidating) return <>Loading...</>

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
