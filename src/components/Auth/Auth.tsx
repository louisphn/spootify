import { FC } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { getCurrentUser } from 'lib/spotify'

const Auth: FC = ({ children }) => {
  const router = useRouter()

  const fetcher = (url) => fetch(url).then((r) => r.json())
  const logIn = useSWR('/api/auth/checkLogin', fetcher)
  const user = useSWR(logIn && 'user', () => getCurrentUser(logIn.data.accessToken))

  if (user.isValidating || logIn.isValidating) return <>Loading...</>

  if (logIn.data === undefined) {
    router.push('/')
    return <></>
  }

  return <>{children}</>
}

export default Auth
