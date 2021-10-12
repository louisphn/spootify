import { FC, useCallback, useState } from 'react'

import { SongContainer } from 'components/Song'
import { PlaylistContainer } from 'components/Playlist'

type Props = {
  tracks: any
  playlist: any
}

const LibraryTemplate: FC<Props> = (props) => {
  const { tracks, playlist } = props
  const [active, setActive] = useState('Songs')

  const handleClick = useCallback(
    (value: string) => {
      setActive(value)
    },
    [setActive]
  )

  return (
    <div className="w-full">
      <h1 className="mt-16 ml-8 text-white text-3xl font-bold">Your library</h1>
      <p className="text-white ml-8 mt-4">(Only show 50 tracks)</p>
      <div className="w-full m-8 mb-12 flex gap-8">
        <button
          onClick={(e) => handleClick(e.currentTarget.innerText)}
          className={`text-white w-24 h-12 ${active === 'Songs' && 'border-gray-50 border-2 rounded-3xl'}`}
        >
          Songs
        </button>
        <button
          onClick={(e) => handleClick(e.currentTarget.innerText)}
          className={`text-white w-24 h-12 ${active === 'Playlists' && 'border-gray-50 border-2 rounded-3xl'}`}
        >
          Playlists
        </button>
      </div>
      {active === 'Songs' && (
        <>
          <div className="w-full px-4">
            <div className="hidden h-16 lg:bg-white lg:bg-opacity-10 lg:flex lg:items-center lg:justify-between">
              <p className={'lg:font-bold lg:text-white lg:w-4/12 lg:ml-5'}>Title</p>
              <p className={'lg:font-bold lg:text-white lg:w-2/12 text-center'}>Album</p>
              <p className={'lg:font-bold lg:text-white lg:w-2/12 ml-4 mr-8'}>Duration</p>
            </div>
          </div>
          <SongContainer playlist={tracks} type={'tracks'} />
        </>
      )}
      {active === 'Playlists' && <PlaylistContainer type={'playlist'} playlists={playlist} />}
    </div>
  )
}

export default LibraryTemplate
