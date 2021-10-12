import { FC } from 'react'

import { SongCard } from 'components/Song'
import { PlaylistTracks } from 'types/PlaylistTracks'
import { AlbumTracks } from 'types/AlbumTracks'
import { TrackItem } from 'types/Track'

type Tracks = {
  added_at: Date
  track: TrackItem
}[]

type Props = {
  playlist: PlaylistTracks | AlbumTracks | Tracks
  type: 'album' | 'playlist' | 'tracks'
}

const SongContainer: FC<Props> = (props) => {
  const { playlist, type } = props

  return (
    <div className="w-full flex flex-col gap-y-8 px-4 lg:gap-0">
      {type === 'playlist'
        ? (playlist as PlaylistTracks).tracks.items.map((track) => (
            <SongCard
              key={track.track.id}
              track={track.track}
              image={track.track.album.images[0]?.url}
              album={track.track.album.name}
            />
          ))
        : type === 'album'
        ? (playlist as AlbumTracks).tracks.items.map((track) => (
            <SongCard
              key={track.id}
              track={track}
              image={(playlist as AlbumTracks).images[0].url}
              album={(playlist as AlbumTracks).name}
            />
          ))
        : (playlist as Tracks).map((track) => (
            <SongCard
              key={track.track.id}
              track={track.track}
              image={track.track.album.images[0].url}
              album={track.track.album.name}
            />
          ))}
    </div>
  )
}

export default SongContainer
