import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id="modeScript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            // TODO 把註解打開
            __html: `
              // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              //   document.documentElement.classList.add('dark')
              // } else {
              //   document.documentElement.classList.remove('dark')
              // }
              document.documentElement.classList.remove('dark')
            `,
          }}
        />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
