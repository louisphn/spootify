import { VFC } from 'react'
import HTMLReactParser from 'html-react-parser'

import { returnCodeToBr } from 'lib/helper'
import styles from 'styles/components/atoms/textarea.module.scss'

type Props = {
  text: string
  className: string
}

const TextArea: VFC<Props> = (props) => {
  const { text, className } = props
  return <p className={className}>{HTMLReactParser(returnCodeToBr(text))}</p>
}

export default TextArea
