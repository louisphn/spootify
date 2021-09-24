import { NextPage } from 'next'
import { useEffect } from 'react'
import { useAtom } from 'jotai'

import { Login } from 'components/Login'
import { tokenAtom } from 'contexts/TokenContext'

const Home: NextPage = () => {
  const [token, setToken] = useAtom(tokenAtom)

  useEffect(() => {
    const url = window.location.href
    if (url.indexOf('_token') > -1) {
      let access_token = url.split('_token=')[1].split('&')[0].trim()
      setToken(access_token)
    }
  }, [])

  console.log(token)

  return <>{token !== '' ? <a href={'/sample'}>'Welcome'</a> : <Login />}</>
}

export default Home
