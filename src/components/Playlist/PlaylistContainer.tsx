import { FC } from 'react'

import { PlaylistCard } from 'components/Playlist'
import { Playlist } from 'types/Playlist'

type Props = {
  playlists: Playlist[]
}

const PlaylistContainer: FC<Props> = (props) => {
  const { playlists } = props

  return (
    <div className={'container w-full mx-auto'}>
      <div className={'flex flex-1 flex-row flex-wrap justify-between m-0'}>
        {playlists.map((playlist) => {
          return <PlaylistCard key={playlist.id} image={playlist.images[0].url} name={playlist.name} />
        })}
      </div>
    </div>
  )
}

export default PlaylistContainer
