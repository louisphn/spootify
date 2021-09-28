import { withIronSession } from 'next-iron-session'

const logOut = async (req, res) => {
  try {
    await req.session.destroy()
    res.status(200)
    res.end()
  } catch (e) {
    res.status(500).send(e.message)
  }
}

export default withIronSession(logOut, {
  password: `${process.env.REACT_APP_AUTH_PASSWORD}`,
  cookieName: 'access-token',
})
