import { FC } from 'react'
import useSWR, { useSWRConfig } from 'swr'

import { BrowsePageTemplate } from 'templates'
import { getPlaylistTracks } from 'lib/spotify'

const BrowsePageContainer: FC = () => {
  const { cache } = useSWRConfig()

  const auth = cache.get('/api/auth/checkLogin')
  const token = auth.accessToken

  const categories = useSWR('recommendCategories', () => getPlaylistTracks(token, 'browse/categories'), {
    revalidateOnFocus: false,
  })

  if (categories.isValidating) return <>Loading...</>

  return (
    <>
      <BrowsePageTemplate genresList={categories.data.categories.items} token={token} />
    </>
  )
}

export default BrowsePageContainer
