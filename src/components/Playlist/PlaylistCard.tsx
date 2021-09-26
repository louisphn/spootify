import { VFC } from 'react'

type Props = {
  name: string
  image: string
}

const PlaylistCard: VFC<Props> = (props) => {
  const { name, image } = props

  return (
    <div className={'md:w-4/12 container flex flex-row items-center'}>
      <img className={'w-6/12 sm:w-2/12 object-cover object-center'} src={image} />
      <div className={'flex flex-col ml-4 sm:ml-8'}>
        <p className={'font-bold'}>{name}</p>
      </div>
    </div>
  )
}

export default PlaylistCard
