import { FC, useState, useEffect } from 'react'
import useSWR, { useSWRConfig } from 'swr'

import { PlaylistDetailTemplate } from 'templates'
import { getData } from 'lib/spotify'

type Props = {
  playlistId: string
  type: 'album' | 'playlist'
}

const PlaylistDetailContainer: FC<Props> = (props) => {
  const { playlistId, type } = props

  const { cache } = useSWRConfig()
  const auth = cache.get('/api/auth/checkLogin')
  const token = auth.accessToken

  const currentPlaylist = useSWR(`${playlistId}`, () => getData(token, `${type}s/${playlistId}`), {
    revalidateOnFocus: false,
  })

  if (currentPlaylist.isValidating || currentPlaylist.data === undefined) return <>Loading...</>

  return <PlaylistDetailTemplate playlist={currentPlaylist.data} type={type} />
}

export default PlaylistDetailContainer
