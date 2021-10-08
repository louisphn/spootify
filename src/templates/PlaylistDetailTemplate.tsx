import { FC } from 'react'

import { SongContainer } from 'components/Song'
import { TextArea } from 'components/Texts'
import { PlaylistTracks } from 'types/PlaylistTracks'
import { AlbumTracks } from 'types/AlbumTracks'

type Props = {
  playlist: PlaylistTracks | AlbumTracks
  type: 'album' | 'playlist'
}

const PlaylistDetailTemplate: FC<Props> = (props) => {
  const { playlist, type } = props

  console.log(playlist)

  return (
    <div className="w-full flex flex-col">
      <div className="w-full">
        <div className="flex flex-col overflow-hidden items-center w-full">
          <h1 className={'text-white font-bold lg:mt-12 lg:mb-4 lg:text-2xl'}>{playlist.name}</h1>
          <img
            className={'w-11/12 my-8 object-cover object-center lg:w-3/12 lg:my-4 lg:mb-8'}
            src={playlist.images[0]?.url || '/thumbnail.jpg'}
          />
          {type === 'playlist' && (playlist as PlaylistTracks).description && (
            <TextArea
              text={(playlist as PlaylistTracks).description}
              className={'text-white mb-4 text-center lg:mb-8'}
            />
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
      <SongContainer playlist={playlist} type={type} />
    </div>
  )
}

export default PlaylistDetailTemplate
