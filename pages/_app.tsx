import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { AppProvider } from '../libs/AppState'
import { apiToken } from '../libs/api/ApiRoutes'
import 'tailwindcss/tailwind.css'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (document.cookie.match('apit') === null) {
      fetch(apiToken)
    }
  }, [])

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
export default App
