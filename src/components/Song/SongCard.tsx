import { VFC } from 'react'
import { TrackItem } from 'types/Track'

import { millisToMinutesAndSeconds } from 'lib/helper'

type Props = {
  track: TrackItem
}

const SongCard: VFC<Props> = (props) => {
  const { track } = props

  return (
    <div
      className={
        'mx-0 bg-white bg-opacity-10 p-4 flex flex-row justify-between items-center h-40 lg:w-full lg:opacity-90 lg:hover:opacity-100 lg:hover:shadow-lg  lg:cursor-pointer'
      }
    >
      <div className={'w-8/12 md:w-6/12 lg:w-4/12 lg:h-5/6 flex flex-row justify-start items-center'}>
        <div className={'w-6/12 sm:w-4/12'}>
          <img className={'w-full object-cover object-center'} src={track.album.images[0]?.url || '/thumbnail.jpg'} />
        </div>
        <div className={'w-full flex flex-col ml-4 sm:w-11/12 sm:h-full sm:ml-8'}>
          <p className={'font-bold text-white line-clamp-2'}>{track.name}</p>
          <div className={'flex flex-row flex-wrap'}>
            {track.artists.map((artist) => (
              <p className={'mt-4 text-left text-white break-all line-clamp-2'}>
                {artist.name}
                {artist !== track.artists[track.artists.length - 1] && ', '}
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className={'w-3/12 lg:w-2/12 text-center text-white hidden line-clamp-2 md:block'}>{track.album.name}</p>
      <p className={'w-3/12 lg:w-2/12 hidden text-white sm:block'}>{millisToMinutesAndSeconds(track.duration_ms)}</p>
    </div>
  )
}

export default SongCard
