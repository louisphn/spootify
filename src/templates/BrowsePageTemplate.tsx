import { FC, useState, useEffect, useCallback } from 'react'
import useSWR, { useSWRConfig } from 'swr'

import { GenreContainer } from 'components/Genre'
import { SongCard } from 'components/Song'
import { SearchBar } from 'components/SearchBar'
import { PlaylistContainer } from 'components/Playlist'
import { useStringChangeEvent } from 'lib/customHooks'
import { getData } from 'lib/spotify'
import { TrackItem } from 'types/Track'
import { Playlist } from 'types/Playlist'

type Props = {
  genresList: []
  token?: string
}

const BrowsePageTemplate: FC<Props> = (props) => {
  const { genresList, token } = props
  const { mutate } = useSWRConfig()
  const [query, setQuery] = useState<string>('')
  const [hidden, setHidden] = useState<boolean>(false)
  const [fetch, setFetch] = useState<boolean>(false)
  const [albums, setAlbums] = useState<Playlist[]>()
  const [playlists, setPlaylists] = useState<Playlist[]>()
  const [tracks, setTracks] = useState<TrackItem[]>()

  const searchData = useSWR(
    fetch ? 'searchData' : null,
    () => getData(token, `search?q=${query}&type=track%2Calbum%2Cplaylist&market=JP&limit=5`),
    {
      onSuccess: (data) => {
        setAlbums(data.albums.items)
        setPlaylists(data.playlists.items)
        setTracks(data.tracks.items)
      },
    }
  )

  const handleChange = useStringChangeEvent(setQuery)

  const handleClick = useCallback(() => {
    if (query === '') return
    searchData.data && mutate('searchData', null)
    setFetch(true)
    setHidden(true)
  }, [query, searchData])

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        if (query === '') return
        searchData.data && mutate('searchData', null)
        setFetch(true)
        setHidden(true)
      }
    },
    [query, searchData]
  )

  useEffect(() => {
    setHidden(false)
    setFetch(false)
  }, [query])

  if (searchData.isValidating) return <>Loading...</>

  return (
    <div className="w-full px-12 lg:px-0 pt-4 pb-16">
      <div className="w-full lg:pl-8">
        <SearchBar value={query} onKeyPress={handleKeyPress} onChange={handleChange} onClick={handleClick} />
      </div>
      <div className={!hidden ? 'block w-full' : 'hidden'}>
        <p className="font-bold text-white mb-8 text-3xl lg:ml-8 lg:mb-16">All Genres</p>
        <GenreContainer genresList={genresList} />
      </div>
      {hidden && searchData.data === undefined ? (
        <p className="lg:pl-12 lg:text-lg lg:text-white lg:font-bold">No results found.</p>
      ) : (
        <></>
      )}
      {tracks && (
        <div className="lg:px-8">
          {tracks.map((track) => (
            <SongCard
              key={track.id}
              track={track}
              image={track.album.images[0]?.url || 'thumbnail.jpg'}
              album={track.album.name}
            />
          ))}
        </div>
      )}
      {albums && <PlaylistContainer playlists={albums} type={'album'} title={'Albums'} />}
      {playlists && <PlaylistContainer playlists={playlists} type={'playlist'} title={'Playlists'} />}
    </div>
  )
}

export default BrowsePageTemplate
