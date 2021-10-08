import { NextPage } from 'next'
import { useState } from 'react'

import { SearchBar } from 'components/SearchBar'
import { useStringChangeEvent } from 'lib/customHooks'

const Sample: NextPage = () => {
  const [value, setValue] = useState<string>()

  return (
    <SearchBar
      value={value}
      onChange={useStringChangeEvent(setValue)}
      onClick={() => {
        console.log('clicked')
      }}
    />
  )
}

export default Sample
