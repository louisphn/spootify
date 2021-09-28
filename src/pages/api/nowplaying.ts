import { withIronSession } from 'next-iron-session'
import { getNowPlaying } from 'lib/spotify'

const nowplaying = async (req, res) => {
  const auth = req.session.get('auth')

  const response = await getNowPlaying(auth.accessToken)

  if (response.status === 204 || response.status > 400) {
    console.log(response)
    return res.status(200).json({ isPlaying: false })
  }

  const result = await response.json()

  res.status(200).json(result)
}

export default withIronSession(nowplaying, {
  password: `${process.env.REACT_APP_AUTH_PASSWORD}`,
  cookieName: 'access-token',
})
