import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}