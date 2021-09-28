import React, { FC } from 'react'

import styles from 'styles/components/login.module.scss'

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Login: FC<Props> = (props) => {
  const { onClick } = props

  return (
    <div className={styles.login}>
      <button onClick={onClick}>Login to Spotify</button>
    </div>
  )
}

export default Login
