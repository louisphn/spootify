import { FC } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { PlaylistContainer } from 'components/Playlist'
import { Playlist } from 'types/Playlist'

type Props = {
  featuredPlaylist: Playlist[]
  myPlaylist: Playlist[]
  username: string
}

const TopPageTemplate: FC<Props> = (props) => {
  const { featuredPlaylist, myPlaylist, username } = props
  const router = useRouter()

  const today = new Date()
  const currentTime = today.getHours()

  return (
    <section className="relative flex flex-col items-center px-4 lg:block lg:mx-0 lg:pr-12">
      <button
        className="py-2 w-32 font-bold rounded-xl tracking-widest bg-green-500 text-gray-50 p-8 mb-12 lg:mb-0 lg:absolute lg:top-6 lg:right-8"
        onClick={async () => {
          await axios.post('/api/auth/logout')
          router.push('/')
        }}
      >
        Logout
      </button>
      <p className="text-white font-bold text-3xl lg:pl-8 lg:pt-16">
        Good {currentTime < 12 ? 'Morning' : currentTime < 18 ? 'Afternoon' : 'Evening'}, {username}
      </p>
      {myPlaylist && <PlaylistContainer title={'My Playlists'} playlists={myPlaylist} />}
      {featuredPlaylist && <PlaylistContainer title={'Featured Playlists'} playlists={featuredPlaylist} />}
    </section>
  )
}

export default TopPageTemplate
