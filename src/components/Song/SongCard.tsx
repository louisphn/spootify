import { useCallback, VFC } from 'react'
import { useAtom } from 'jotai'

import { millisToMinutesAndSeconds } from 'lib/helper'
import { nowPlaying } from 'contexts/NowPlaying'
import { TrackItem } from 'types/Track'

type Props = {
  track: TrackItem
  image: string
  album: string
}

const SongCard: VFC<Props> = (props) => {
  const { track, image, album } = props

  const [currentPlaying, setCurrentPlaying] = useAtom(nowPlaying)

  const handleClick = useCallback(
    (uri: string) => {
      setCurrentPlaying(uri)
    },
    [setCurrentPlaying]
  )

  return (
    <div
      onClick={() => handleClick(track.uri)}
      className={
        'cursor-pointer	mx-0 bg-white bg-opacity-10 p-4 flex flex-row justify-between items-center h-40 lg:w-full lg:opacity-90 lg:hover:opacity-100 lg:hover:shadow-lg  lg:cursor-pointer'
      }
    >
      <div className={'w-8/12 md:w-6/12 lg:w-4/12 lg:h-5/6 flex flex-row justify-start items-center'}>
        <div className={'w-6/12 sm:w-4/12'}>
          <img
            className={'w-full object-cover object-center'}
            src={image || track.album.images[0].url || '/thumbnail.jpg'}
          />
        </div>
        <div className={'w-full flex h-40 flex-col justify-center ml-4 sm:w-11/12 sm:h-full sm:ml-8'}>
          <p className={'font-bold text-white lg:h-12 line-clamp-2'}>{track.name}</p>
          <div className={'flex flex-row flex-wrap lg:h-16 break-all line-clamp-2'}>
            <p className={'mt-4 text-left lg:h-full text-white break-word'}>
              {track.artists &&
                track.artists.map((artist) => (
                  <>
                    {artist.name}
                    {artist !== track.artists[track.artists.length - 1] && ', '}
                  </>
                ))}
            </p>
          </div>
        </div>
      </div>
      <p className={'w-3/12 text-center text-white hidden line-clamp-2 sm:block lg:w-2/12 '}>{album}</p>
      <p className={'w-3/12 hidden text-white sm:block lg:w-2/12 '}>{millisToMinutesAndSeconds(track.duration_ms)}</p>
    </div>
  )
}

export default SongCard
