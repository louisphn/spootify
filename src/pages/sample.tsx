import { useState, useEffect } from 'react'
import { withIronSession } from 'next-iron-session'
import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'

import { SongCard } from 'components/Song'
import { PlaylistContainer } from 'components/Playlist'
import { Playlist } from 'types/Playlist'
import { TrackItem } from 'types/Track'
import { makeRequest, getNowPlaying } from 'lib/spotify'
import { Layout } from 'components/Layout'

const Sample = (props) => {
  const { auth } = props

  const router = useRouter()
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR('/api/nowplaying', fetcher)

  const [featured, setFeatured] = useState<Playlist[]>([])
  const [currentSong, setCurrentSong] = useState<TrackItem>(data?.item)

  useEffect(() => {
    makeRequest(auth.accessToken, 'featured-playlists', 'playlists')
      .then((res) => {
        setFeatured(res)
      })
      .catch((err) => {
        console.error(err)
      })
    setCurrentSong(data?.item)
    console.log(data?.item)
  }, [data])

  console.log(data, error)
  return (
    <Layout pageTitle={'Spootify'} active={'Home'}>
      {currentSong !== undefined && <SongCard track={currentSong} />}
      {featured.length > 0 && <PlaylistContainer playlists={featured} />}
      <button
        onClick={async () => {
          await axios.post('/api/auth/logout')
          router.push('/')
        }}
      >
        Logout
      </button>
    </Layout>
  )
}

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const auth = req.session.get('auth')

    if (!auth) {
      res.statusCode = 404
      res.end()
      return { props: {} }
    }

    return {
      props: { auth },
    }
  },
  {
    cookieName: 'access-token',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production' ? true : false,
    },
    password: `${process.env.REACT_APP_AUTH_PASSWORD}`,
  }
)

export default Sample
