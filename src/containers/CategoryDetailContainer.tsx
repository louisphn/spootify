import { FC } from 'react'
import { useRouter } from 'next/router'
import useSWR, { useSWRConfig } from 'swr'

import { CategoryDetailTemplate } from 'templates'
import { getData } from 'lib/spotify'
import { getAsString } from 'lib/helper'

type Props = {
  categoryName: string
  categoryId: string
}

const CategoryDetailContainer: FC<Props> = (props) => {
  const { categoryId, categoryName } = props

  const { cache } = useSWRConfig()
  const auth = cache.get('/api/auth/checkLogin')
  const token = auth.accessToken

  const categoryPlaylists = useSWR(
    'categoryPlaylists',
    () => getData(token, `browse/categories/${categoryId}/playlists`),
    { revalidateOnFocus: false }
  )

  if (categoryPlaylists.isValidating) return <>Loading...</>

  return (
    <>
      <CategoryDetailTemplate categoryName={categoryName} playlists={categoryPlaylists.data.playlists.items} />
    </>
  )
}

export default CategoryDetailContainer
