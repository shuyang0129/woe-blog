import '@/styles/reset.css'
import '@/styles/globals.css'

import Layout from '@/components/Layout'
import localFont from 'next/font/local'
import { Fragment } from 'react'

import type { AppProps } from 'next/app'

const inter = localFont({
  src: [
    {
      path: './fonts/Inter/Inter-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}
