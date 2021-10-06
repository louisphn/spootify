import { FC } from 'react'

import { SongCard } from 'components/Song'
import { PlaylistTracks } from 'types/PlaylistTracks'
import { AlbumTracks } from 'types/AlbumTracks'

type Props = {
  playlist: PlaylistTracks | AlbumTracks
  type: 'album' | 'playlist'
}

const SongContainer: FC<Props> = (props) => {
  const { playlist, type } = props

  return (
    <div className="w-full flex flex-col gap-y-8 px-4 lg:gap-0">
      {type === 'playlist'
        ? playlist.tracks.items.map((track) => (
            <SongCard
              key={track.track.id}
              track={track.track}
              image={track.track.album.images[0]?.url}
              album={track.track.album.name}
            />
          ))
        : playlist.tracks.items.map((track) => (
            <SongCard key={track.id} track={track} image={playlist.images[0].url} album={playlist.name} />
          ))}
    </div>
  )
}

export default SongContainer
