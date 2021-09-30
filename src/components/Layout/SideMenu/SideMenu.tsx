import { FC } from 'react'
import { useSWRConfig } from 'swr'
import { Playlist } from 'types/Playlist'

type Props = {
  items: { name: string; path: string }[]
  active: string
}

const SideMenu: FC<Props> = (props) => {
  const { items, active } = props
  const width = `w-${items.length + 1}/12`

  const { cache } = useSWRConfig()
  const userPlaylists: Playlist[] = cache.get('userPlaylists')

  return (
    <nav className="overflow-scroll	flex h-1/6 bg-gradient-to-b from-green-500 via-green-700 to-green-900 w-full justify-center md:w-3/12 md:min-h-full md:flex-col md:justify-start md:pr-4">
      <div className="flex w-full md:flex-col md:h-4/6">
        {items.map((item) => {
          return (
            <li
              className={`list-none flex align-center items-center rounded-lg h-full ${width} md:mx-auto md:my-4 md:pl-8 md:w-11/12 md:h-16  ${
                active === item.name && 'bg-gray-300 bg-opacity-20'
              }`}
              key={item.name}
            >
              <a className="w-full" href={item.path}>
                <p className="w-full text-center text-gray-50 tracking-widest md:text-lg md:text-left">{item.name}</p>
              </a>
            </li>
          )
        })}
      </div>
      <hr />
      {userPlaylists && (
        <div className="hidden md:block">
          <hr />
          {userPlaylists.map((playlist) => (
            <li
              className={`list-none flex align-center items-center rounded-lg h-full ${width} md:mx-auto md:my-4 md:pl-8 md:w-11/12 md:h-12 ${
                active === playlist.name && 'bg-gray-300 bg-opacity-20'
              }`}
              key={playlist.name}
            >
              <a className="w-full" href={playlist.uri}>
                <p className="w-full text-center text-gray-50 tracking-widest md:text-left">{playlist.name}</p>
              </a>
            </li>
          ))}
        </div>
      )}
    </nav>
  )
}

export default SideMenu
