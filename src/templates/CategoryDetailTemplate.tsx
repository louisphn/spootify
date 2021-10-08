import { FC } from 'react'

import { PlaylistContainer } from 'components/Playlist'
import { Playlist } from 'types/Playlist'

type Props = {
  categoryName: string
  playlists: Playlist[]
}
const CategoryDetailTemplate: FC<Props> = (props) => {
  const { categoryName, playlists } = props

  return (
    <div>
      <p>{categoryName}</p>
      {playlists && <PlaylistContainer title={''} type={'playlist'} playlists={playlists} />}
    </div>
  )
}

export default CategoryDetailTemplate
