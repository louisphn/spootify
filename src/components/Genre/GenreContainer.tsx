import { FC, useCallback } from 'react'
import { useRouter } from 'next/router'

import { GenreCard } from 'components/Genre'
import { colors } from 'lib/data'
import { category } from 'types/Category'
import styles from 'styles/components/playlist_container.module.scss'

type Props = {
  genresList: category[] | string[]
}

const GenreContainer: FC<Props> = (props) => {
  const { genresList } = props
  const router = useRouter()

  const handleClick = useCallback((categoryId: string) => {
    router.push(`browse/${categoryId}`)
  }, [])

  return (
    <div
      className={`${styles.playlist_container} flex flex-col w-full gap-y-8 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-20`}
    >
      {genresList.map((genre, index) => (
        <GenreCard key={genre.id} color={colors[index]} genreName={genre.name} onClick={() => handleClick(genre.id)} />
      ))}
    </div>
  )
}

export default GenreContainer
