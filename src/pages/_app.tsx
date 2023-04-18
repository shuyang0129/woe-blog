import '@/styles/globals.css'
import '@/styles/prism.css'
import '@/styles/prism-nord.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import clsx from 'clsx'
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
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-gray-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <Header />
      <main className={clsx('relative')}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  )
}
