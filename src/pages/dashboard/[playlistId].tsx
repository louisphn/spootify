import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Layout } from 'components/Layout'
import { PlaylistDetailContainer } from 'containers'
import { getAsString } from 'lib/helper'

const Playlist: NextPage = () => {
  const router = useRouter()
  const { playlistId } = router.query

  return (
    <Layout pageTitle={'Spootify'} active={''}>
      <PlaylistDetailContainer playlistId={getAsString(playlistId)} />
    </Layout>
  )
}

export default Playlist
