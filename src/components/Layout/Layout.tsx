import { FC } from 'react'
import Head from 'next/head'

import { Auth } from 'components/Auth'
import { SideMenu } from 'components/Layout/SideMenu'

type Props = {
  pageTitle: string
  active: string
}

const Layout: FC<Props> = (props) => {
  const { pageTitle, active, children } = props
  const nav = [
    { name: 'Home', path: '#' },
    { name: 'Featured Playlists', path: '#' },
    { name: 'Browse', path: '#' },
  ]

  return (
    <Auth>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="overflow-hidden w-screen h-screen flex flex-col md:flex-row">
        <SideMenu items={nav} active={active} />
        <div
          className={
            'overflow-scroll w-full h-full bg-gradient-to-b from-gray-200 via-white to-gray-300 pt-16 md:pt-0 md:pr-12'
          }
        >
          {children}
        </div>
      </main>
    </Auth>
  )
}

export default Layout
