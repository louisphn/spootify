import { FC } from 'react'

import { SongCard } from 'components/Song'
import { PlaylistTracks } from 'types/PlaylistTracks'

type Props = {
  playlist: PlaylistTracks
}

const SongContainer: FC<Props> = (props) => {
  const { playlist } = props

  return (
    <div className="w-full flex flex-col gap-y-8 px-4 lg:gap-0">
      {playlist.tracks.items.map((track) => (
        <SongCard key={track.track.id} track={track.track} />
      ))}
    </div>
  )
}

export default SongContainer
