import React, { VFC, memo } from 'react'

type Props = {
  value: string
  onClick: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress: (e: React.KeyboardEvent<HTMLDivElement>) => void
}

const SearchBar: VFC<Props> = memo((props) => {
  const { value, onChange, onClick, onKeyPress } = props

  return (
    <div className={'flex items-center relative w-full lg:w-8/12 h-32'}>
      <img
        style={{ filter: 'brightness(0%)' }}
        className="absolute t-0 left-3 "
        src="/search.png"
        width={24}
        height={24}
      />
      <input
        style={{ textIndent: '48px' }}
        placeholder="Albums, songs, or playlists"
        className="w-full h-12 rounded-3xl border-0"
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button
        onClick={onClick}
        className="w-32 h-12 bg-green-500 font-bold rounded-3xl ml-4 hover:bg-green-400 text-white"
      >
        Search
      </button>
    </div>
  )
})

export default SearchBar
