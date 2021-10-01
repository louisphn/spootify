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
    { name: 'Browse', path: '#' },
    { name: 'Your Library', path: '#' },
  ]

  return (
    <Auth>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main style={{ minHeight: '768px' }} className="overflow-hidden w-screen h-screen flex flex-col lg:flex-row">
        <SideMenu items={nav} active={active} />
        <div
          className={
            'overflow-scroll w-full h-full bg-gradient-to-t from-green-600 via-green-700 to-gray-800 py-16 lg:py-0 lg:pb-16 lg:pr-12'
          }
        >
          {children}
        </div>
      </main>
    </Auth>
  )
}

export default Layout
