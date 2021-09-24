// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 'https://accounts.spotify.com/authorize'
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const redirectUri = process.env.SPOTIFY_REDIRECT_URI
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
]

const clientPayload = { clientId, clientSecret, redirectUri }

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      var parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])

      return initial
    }, {})
}

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`
