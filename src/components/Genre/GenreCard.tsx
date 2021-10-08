import { VFC, memo } from 'react'

type Props = {
  genreName: string
  color: string
  onClick?: () => void
}

const GenreCard: VFC<Props> = memo((props) => {
  const { genreName, color = 'gray-200', onClick } = props

  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center cursor-pointer bg-opacity-70 opacity-90 bg-${color} h-40 w-full hover:bg-opacity-100 hover:opacity-100 lg:block lg:w-3/12`}
    >
      <p className="text-lg font-bold text-white lg:ml-8 lg:mt-8">{genreName.toUpperCase()}</p>
    </div>
  )
})

export default GenreCard
