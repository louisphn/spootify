import { FC, useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import SpotifyPlayer from 'react-spotify-web-playback'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useSWR from 'swr'

import { Auth } from 'components/Auth'
import { SideMenu } from 'components/Layout/SideMenu'
import { nowPlaying } from 'contexts/NowPlaying'
import styles from 'styles/components/layout.module.scss'

type Props = {
  pageTitle: string
  active: string
}

const Layout: FC<Props> = (props) => {
  const { pageTitle, active, children } = props
  const [currentPlaying] = useAtom(nowPlaying)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const router = useRouter()

  const fetcher = (url) => fetch(url).then((r) => r.json())
  const logIn = useSWR('/api/auth/checkLogin', fetcher, { revalidateOnFocus: false })

  useEffect(() => {
    if (currentPlaying !== '') {
      setIsPlaying(true)
    }
  }, [currentPlaying])

  const nav = [
    { name: 'Home', path: '/dashboard' },
    { name: 'Browse', path: '/dashboard/browse' },
    { name: 'Your Library', path: '/dashboard/library' },
  ]

  if (logIn.isValidating) return <>Loading...</>

  if (logIn.data === undefined) {
    router.push('/')
  }
  return (
    <Auth>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className={`${styles.layout_height} overflow-hidden w-screen h-screen flex flex-col`}>
        <div className="w-full h-full flex flex-col lg:flex-row">
          <SideMenu items={nav} active={active} />
          <div
            className={`${styles.layout_height} overflow-scroll w-full bg-gradient-to-t from-green-600 via-green-700 to-gray-800 py-16 lg:py-0 lg:pb-16`}
          >
            {children}
          </div>
        </div>
        <div className="w-screen absolute bottom-0">
          <SpotifyPlayer
            token={logIn.data.accessToken}
            uris={currentPlaying}
            play={isPlaying}
            magnifySliderOnHover
            syncExternalDevice
            styles={{
              height: 72,
              bgColor: '#191414',
              color: '#1DB954',
              sliderHandleColor: '#fff',
              sliderColor: '#1DB954',
              sliderTrackColor: '#707070',
              trackNameColor: '#fff',
            }}
          />
        </div>
      </main>
    </Auth>
  )
}

export default Layout
