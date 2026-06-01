import '@/css/tailwind.css'
import '@/css/extra.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import LayoutWrapper from '@/components/LayoutWrapper'
import ScrollTop from '@/components/ScrollTop'
import { LanguageProvider } from '@/context/LanguageContext'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <ScrollTop />
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </LanguageProvider>
  )
}
