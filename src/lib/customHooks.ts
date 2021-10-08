import React, { useCallback, SetStateAction, Dispatch } from 'react'

//文字列に対するonChangeに使用
export const useStringChangeEvent = (update: Dispatch<SetStateAction<string>>) => {
  return useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      update(event.target.value)
    },
    [update]
  )
}
