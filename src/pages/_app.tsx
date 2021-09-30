import 'styles/base.scss' //scssのベーススタイル
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}
export default MyApp
