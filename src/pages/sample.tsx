import { useState, useEffect } from 'react'
import { withIronSession } from 'next-iron-session'
import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'

import { SongCard } from 'components/Song'
import { PlaylistContainer } from 'components/Playlist'
import { Playlist } from 'types/Playlist'
import { TrackItem } from 'types/Track'
import { makeRequest, getNowPlaying, getCurrentUserPlaylists } from 'lib/spotify'
import { Layout } from 'components/Layout'

const Sample = (props) => {
  const { auth } = props
  const router = useRouter()

  const nowPlaying = useSWR('nowPlaying', () => getNowPlaying(auth.accessToken))
  const userPlaylist = useSWR('userPlaylists', () => getCurrentUserPlaylists(auth.accessToken, 'me/playlists'))
  const featuredPlaylist = useSWR('featuredPlaylists', () =>
    makeRequest(auth.accessToken, 'featured-playlists', 'playlists')
  )

  return (
    <Layout pageTitle={'Spootify'} active={'Home'}>
      {nowPlaying.data && <SongCard track={nowPlaying.data} />}
      {featuredPlaylist.data && (
        <>
          <h1 className="text-2xl font-bold py-8 md:pl-8">Featured Playlists</h1>
          <PlaylistContainer playlists={featuredPlaylist.data} />
        </>
      )}
      {userPlaylist?.data && (
        <>
          <h1 className="text-2xl font-bold py-8 md:pl-8">My Playlists</h1>
          <PlaylistContainer playlists={userPlaylist.data} />
        </>
      )}
      <button
        className="py-16"
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
