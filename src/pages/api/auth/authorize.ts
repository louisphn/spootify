import { withIronSession } from 'next-iron-session'
import queryString from 'query-string'

import { SpotifyAuthApiResponse } from 'types/AuthApiResponse'

const authorize = async (req, res) => {
  const { code, state } = req.query

  const params = new URLSearchParams()
  params.append('grant_type', 'authorization_code')
  params.append('code', code as string)
  params.append('redirect_uri', 'http://localhost:3000/api/auth/authorize')

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(
        `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
        'utf-8'
      ).toString('base64')}`,
    },
    body: queryString.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: `${process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI}`,
    }),
  })

  const result: SpotifyAuthApiResponse = await response.json()

  req.session.set('auth', {
    accessToken: result.access_token,
    refreshToken: result.refresh_token,
  })

  await req.session.save()

  res.status(200).redirect('/dashboard')
}

export default withIronSession(authorize, {
  password: `${process.env.NEXT_PUBLIC_AUTH_PASSWORD}`,
  cookieName: 'access-token',
})
