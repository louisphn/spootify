import { FC } from 'react'
import useSWR, { useSWRConfig } from 'swr'

import { getCurrentUserPlaylists } from 'lib/spotify'

type Props = {
  items: { name: string; path: string }[]
  active: string
}

const SideMenu: FC<Props> = (props) => {
  const { items, active } = props
  const width = `w-${items.length + 1}/12`

  const { cache } = useSWRConfig()
  const auth = cache.get('/api/auth/checkLogin')
  const token = auth.accessToken
  const userPlaylists = useSWR('userPlaylists', () => getCurrentUserPlaylists(token, 'me/playlists'))

  if (userPlaylists.isValidating) return <>Loading...</>

  return (
    <nav className="overflow-scroll	flex h-1/6 bg-gradient-to-l from-green-600 via-green-700 to-green-800  w-full justify-center lg:w-3/12 lg:min-h-full lg:flex-col lg:justify-start lg:px-4">
      <div className="flex w-full lg:flex-col lg:h-4/6">
        {items.map((item) => {
          return (
            <li
              className={`list-none flex align-center items-center rounded-lg h-full ${width} lg:mx-auto lg:my-3 lg:pl-4 lg:w-11/12 lg:h-16  ${
                active === item.name && 'bg-gray-300 bg-opacity-20'
              }`}
              key={item.name}
            >
              <a className="w-full" href={item.path}>
                <p className="w-full text-center text-gray-50 tracking-widest lg:text-lg lg:text-left">{item.name}</p>
              </a>
            </li>
          )
        })}
      </div>
      <hr />
      {userPlaylists && (
        <div className="hidden lg:block">
          <hr className="lg:pl-8" />
          {userPlaylists.data.map((playlist) => (
            <li
              className={`list-none flex align-center items-center rounded-lg h-full ${width} lg:mx-auto lg:my-4 lg:pl-4 lg:w-11/12 lg:h-12 ${
                active === playlist.name && 'bg-gray-300 bg-opacity-20'
              }`}
              key={playlist.name}
            >
              <a className="w-full" href={playlist.uri}>
                <p className="w-full text-center text-gray-50 tracking-widest lg:text-left">{playlist.name}</p>
              </a>
            </li>
          ))}
        </div>
      )}
    </nav>
  )
}

export default SideMenu
