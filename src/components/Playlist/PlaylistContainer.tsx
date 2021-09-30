import { FC } from 'react'

import { PlaylistCard } from 'components/Playlist'
import { Playlist } from 'types/Playlist'

import styles from 'styles/components/playlist_container.module.scss'

type Props = {
  playlists: Playlist[]
}

const PlaylistContainer: FC<Props> = (props) => {
  const { playlists } = props

  return (
    <div className={'container w-full mx-auto'}>
      <div
        className={`${styles.playlist_container} flex flex-col md:flex-1 md:flex-row md:flex-wrap md:justify-center md:gap-x-16 gap-y-8 md:m-0`}
      >
        {playlists.map((playlist) => {
          return (
            <PlaylistCard key={playlist.id} image={playlist.images[0]?.url || '/thumbnail.jpg'} name={playlist.name} />
          )
        })}
      </div>
    </div>
  )
}

export default PlaylistContainer
