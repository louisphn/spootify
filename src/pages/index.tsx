import { GetStaticProps } from 'next'
import { useCallback } from 'react'

import { Login } from 'components/Login'

const Home = (props) => {
  const { loginPath } = props

  const login = useCallback(() => {
    window.location.href = loginPath
  }, [loginPath])

  return <Login onClick={login} />
}

export const getStaticProps: GetStaticProps = async () => {
  const scopes = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-library-read',
    'user-library-modify',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-read-playback-position',
    'user-top-read',
    'user-modify-playback-state',
  ]

  const params = new URLSearchParams()
  params.append('client_id', process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || '')
  params.append('response_type', 'code')
  params.append('redirect_uri', process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI || '')
  params.append('scope', scopes.join(' '))
  params.append('state', 'state')
  params.append('show_dialog', 'true')
  return {
    props: { loginPath: `https://accounts.spotify.com/authorize?${params.toString()}` },
  }
}

export default Home
