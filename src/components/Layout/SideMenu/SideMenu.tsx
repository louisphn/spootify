import { FC } from 'react'

type Props = {
  items: { name: string; path: string }[]
  active: string
}

const SideMenu: FC<Props> = (props) => {
  const { items, active } = props
  const width = `w-${items.length + 1}/12`

  return (
    <nav className="overflow-hidden	flex h-1/6 bg-gradient-to-b from-green-500 via-green-700 to-green-900 w-full justify-center sm:w-3/12 sm:h-full sm:flex-col sm:justify-start sm:mr-16">
      {items.map((item) => {
        return (
          <li
            className={`list-none flex align-center items-center rounded-lg h-full ${width} md:mx-auto md:my-4 md:pl-8 md:w-11/12 md:h-20  ${
              active === item.name && 'bg-gray-300 bg-opacity-20'
            }`}
            key={item.name}
          >
            <a className="w-full" href={item.path}>
              <p className="w-full text-center text-gray-50 tracking-widest md:text-lg md:text-left">{item.name}</p>
            </a>
          </li>
        )
      })}
    </nav>
  )
}

export default SideMenu
