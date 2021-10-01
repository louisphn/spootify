import { useState, useEffect } from 'react'
import { withIronSession } from 'next-iron-session'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { getCurrentUser } from 'lib/spotify'

const Auth = ({ children }) => {
  const router = useRouter()
  const [refetch, setRefetch] = useState<boolean>(true)

  const fetcher = (url) => fetch(url).then((r) => r.json())
  const logIn = useSWR(refetch ? '/api/auth/checkLogin' : null, fetcher)
  const user = useSWR(logIn.data !== undefined ? 'user' : null, () => getCurrentUser(logIn.data.accessToken))

  useEffect(() => {
    setRefetch(true)
  }, [])

  if (user.isValidating || logIn.isValidating) return <>Loading...</>

  if (refetch && logIn.data === undefined) {
    router.push('/')
    return <></>
  }

  return <>{children}</>
}

export default Auth
