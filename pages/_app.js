import '@/styles/globals.scss'
import {ThemeProvider} from 'next-themes'
import Layout from '../components/layout'

export default function App({Component, pageProps}) {
  return (
    <>
      <ThemeProvider enableSystem={false} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
