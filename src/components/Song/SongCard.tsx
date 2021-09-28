import { VFC } from 'react'
import { TrackItem } from 'types/Track'

import { millisToMinutesAndSeconds } from 'lib/helper'

type Props = {
  track: TrackItem
}

const SongCard: VFC<Props> = (props) => {
  const { track } = props

  return (
    <div className={'container mx-auto sm:mx-0 flex flex-row justify-between items-center'}>
      <div className={'w-full md:w-6/12 lg:w-4/12 flex flex-row justify-start items-center'}>
        <img className={'w-6/12 sm:w-3/12 object-cover object-center'} src={track.album.images[0].url} />
        <div className={'flex flex-col ml-4 sm:ml-8'}>
          <p className={'font-bold'}>{track.name}</p>
          <div className={'flex flex-row'}>
            {track.artists.map((artist) => (
              <p className={'mt-4'}>
                {artist.name}
                {artist !== track.artists[track.artists.length - 1] && ', '}
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className={'hidden md:block'}>{track.album.name}</p>
      <p className={'hidden sm:block'}>{millisToMinutesAndSeconds(track.duration_ms)}</p>
    </div>
  )
}

export default SongCard
