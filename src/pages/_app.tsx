import '@/styles/reset.css'
import '@/styles/globals.css'

import { Inter } from 'next/font/google'

import type { AppProps } from 'next/app'
import { Fragment } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Fragment>
  )
}
