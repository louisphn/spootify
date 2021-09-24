import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { accessUrl } from 'lib/spotify'

import styles from 'styles/components/login.module.scss'

const Login: FC = () => {
  return (
    <div className={styles.login}>
      <Link href={accessUrl}>
        <a>
          <button>Login to Spotify</button>
        </a>
      </Link>
    </div>
  )
}

export default Login
