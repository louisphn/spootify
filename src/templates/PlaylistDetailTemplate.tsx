import { FC } from 'react'

import { SongContainer } from 'components/Song'
import { PlaylistTracks } from 'types/PlaylistTracks'

type Props = {
  playlist: PlaylistTracks
}

const PlaylistDetailTemplate: FC<Props> = (props) => {
  const { playlist } = props

  return (
    <div className="w-full flex flex-col">
      <div className="w-full">
        <div className="flex flex-col overflow-hidden items-center w-full">
          <h1 className={'text-white font-bold lg:mt-12 lg:mb-4 lg:text-2xl'}>{playlist.name}</h1>
          <img
            className={'w-11/12 my-8 object-cover object-center lg:w-3/12 lg:my-4'}
            src={playlist.images[0]?.url || '/thumbnail.jpg'}
          />
          {playlist.description && (
            <p className={'text-white mb-4 text-center lg:mt-4 lg:mb-8'}>{playlist.description}</p>
          )}
        </div>
      </div>
      <div className="w-full px-4">
        <div className="hidden h-16 lg:bg-white lg:bg-opacity-10 lg:flex lg:items-center lg:justify-between">
          <p className={'lg:font-bold lg:text-white lg:w-4/12 lg:ml-5'}>Title</p>
          <p className={'lg:font-bold lg:text-white lg:w-2/12 text-center'}>Album</p>
          <p className={'lg:font-bold lg:text-white lg:w-2/12 ml-4 mr-8'}>Duration</p>
        </div>
      </div>
      <SongContainer playlist={playlist} />
    </div>
  )
}

export default PlaylistDetailTemplate
