import { withIronSession } from 'next-iron-session'
import axios from 'axios'
import { getRefreshToken } from 'lib/spotify'

const checkLogin = async (req, res) => {
  console.log(req.session.get('auth'))
  try {
    const { accessToken, refreshToken } = req.session.get('auth')
    try {
      await axios.get(`https://api.spotify.com/v1/me`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    } catch {
      if (refreshToken) {
        const response = await getRefreshToken(refreshToken)
        req.session.set('auth', {
          accessToken: response.access_token,
          refreshToken: response.refresh_token,
        })
        await req.session.save()
        res.status(200)
        res.json({ accessToken: response.access_token, refreshToken: response.refresh_token })
      } else {
        res.status(401)
        res.json({ message: 'unauthorized' })
      }
    }
    res.status(200)
    res.json({ accessToken })
  } catch (e) {
    res.status(500).send(e.message)
  }
}

export default withIronSession(checkLogin, {
  password: `${process.env.NEXT_PUBLIC_AUTH_PASSWORD}`,
  cookieName: 'access-token',
})
