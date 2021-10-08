import { VFC } from 'react'

type Props = {
  name: string
  image: string
  onClick?: () => void
}

const PlaylistCard: VFC<Props> = (props) => {
  const { name, image, onClick } = props

  return (
    <div
      onClick={onClick}
      className={
        'bg-white bg-opacity-10 shadow-sm container flex flex-row items-center h-40 lg:w-3/12 lg:h-32 lg:opacity-90 lg:hover:opacity-100 lg:hover:shadow-lg lg:p-4 lg:cursor-pointer'
      }
    >
      <img className={'w-6/12  h-full sm:w-4/12 sm:mr-4 lg:w-32 lg:h-full lg:object-cover object-center'} src={image} />
      <div className={'flex flex-col mx-3 md:mx-0 md:ml-8 lg:ml-6'}>
        <p className={'font-bold text-white line-clamp-2 break-all lg:break-normal'}>{name}</p>
      </div>
    </div>
  )
}

export default PlaylistCard
