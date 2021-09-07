import type { AppProps } from 'next/app'
import { AppProvider } from '../libs/AppState'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
export default MyApp
