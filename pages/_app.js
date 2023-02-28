import '@/styles/globals.css'
import {ThemeProvider} from 'next-themes'

export default function App({Component, pageProps}) {
  return (
    <>
      <ThemeProvider enableSystem={false} attribute="class" themes={['blue']}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
