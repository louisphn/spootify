import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Layout } from 'components/Layout'
import { PlaylistDetailContainer } from 'containers'
import { getAsString } from 'lib/helper'

const Playlist: NextPage = () => {
  const router = useRouter()
  const { playlistId, album } = router.query

  return (
    <Layout pageTitle={'Spootify'} active={''}>
      {getAsString(album) === 'true' ? (
        <PlaylistDetailContainer playlistId={getAsString(playlistId)} type={'album'} />
      ) : (
        <PlaylistDetailContainer playlistId={getAsString(playlistId)} type={'playlist'} />
      )}
    </Layout>
  )
}

export default Playlist
