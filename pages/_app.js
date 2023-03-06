import '@/styles/globals.css'
import {ThemeProvider} from 'next-themes'
import Layout from '../components/layout'
import './resume/resume.css'

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
