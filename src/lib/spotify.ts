import queryString from 'query-string'
import axios from 'axios'

// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// export const authEndpoint = 'https://accounts.spotify.com/authorize'
// const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
// // Replace with your app's client ID, redirect URI and desired scopes
// const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
// const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
// const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI
// const basic = Buffer.from('11c1cc0225e3402897fe28deafc3fc67:eab32b02fc0a4507b928b3b3b1a69787', 'utf-8').toString(
//   'base64'
// )

// const scopes = [
//   'streaming',
//   'user-read-email',
//   'user-read-private',
//   'user-library-read',
//   'user-library-modify',
//   'user-read-currently-playing',
//   'user-read-recently-played',
//   'user-read-playback-state',
//   'user-read-playback-position',
//   'user-top-read',
//   'user-modify-playback-state',
// ]

// export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//   '%20'
// )}&response_type=code&state&show_dialog=true`

// export const getAccessToken = async (code: string) => {
//   const req = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       Authorization: `Basic ${basic}`,
//     },
//     body: queryString.stringify({
//       grant_type: 'authorization_code',
//       code: code,
//       redirect_uri: 'http://localhost:3000',
//     }),
//   })
//   const res = await req.json()
//   console.log(res)
//   return res.access_token
// }

const API_ENDPOINT = 'https://api.spotify.com/v1'

export const makeRequest = async (token, path, resourceType) => {
  const res = await axios.get(`${API_ENDPOINT}/browse/${path}`, { headers: { Authorization: `Bearer ${token}` } })

  return res.data[resourceType].items
}

export const getNowPlaying = async (token) => {
  const res = await axios.get(`https://api.spotify.com/v1/me/player/currently-playing`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data.item
}

// in case using api path nowPlaying
// export const getNowPlaying = async (token) => {
//   return await fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   })
// }

export const getCurrentUserPlaylists = async (token, api) => {
  const res = await axios.get(`https://api.spotify.com/v1/${api}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  console.log(res)
  return res.data.items
}
