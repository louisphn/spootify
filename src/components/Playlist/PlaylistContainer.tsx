import { FC, useCallback } from 'react'
import { useRouter } from 'next/router'

import { PlaylistCard } from 'components/Playlist'
import { Playlist } from 'types/Playlist'

import styles from 'styles/components/playlist_container.module.scss'

type Props = {
  playlists: Playlist[]
  type: 'album' | 'playlist'
  title?: string
}

const PlaylistContainer: FC<Props> = (props) => {
  const { playlists, type, title } = props
  const router = useRouter()

  const handleClick = useCallback((playlistId: string) => {
    router.push({
      pathname: '/dashboard/[playlistId]/[album]',
      query: type === 'playlist' ? { playlistId: playlistId, album: false } : { playlistId: playlistId, album: true },
    })
  }, [])

  return (
    <div className="w-full md:w-8/12 lg:w-full lg:pt-8">
      {title && <h1 className="text-2xl tracking-widest text-white font-medium py-8 lg:pl-8">{title}</h1>}
      <div className={'w-full mx-auto'}>
        <div
          className={`${styles.playlist_container} flex flex-col lg:flex-1 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-16 gap-y-8 lg:m-0`}
        >
          {playlists.map((playlist) => {
            return (
              <PlaylistCard
                onClick={() => handleClick(playlist.id)}
                key={playlist.id}
                image={playlist.images[0]?.url || '/thumbnail.jpg'}
                name={playlist.name}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PlaylistContainer
