import { FC, useState } from 'react'
import Head from 'next/head'
import { SideMenu } from 'components/Layout/SideMenu'
import useRouter from 'next/router'

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
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="overflow-hidden w-screen h-screen flex flex-col md:flex-row">
        <SideMenu items={nav} active={active} />
        <div className={'overflow-scroll w-full h-full pt-16 md:pt-0 md:pr-12'}>{children}</div>
      </main>
    </>
  )
}

export default Layout
