import BackButton from '@/components/BackButton'
import Container from '@/components/Container'
import Prose from '@/components/Prose'
import { PageProps } from '@/pages/_app'
import clsx from 'clsx'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { Fragment, memo, ReactNode } from 'react'

interface Meta {
  author: string
  date: string
  title: string
  description: string
}

interface Props extends PageProps {
  meta: Meta
  children?: ReactNode
}

function ArticleLayout({ meta, children, previousPathname }: Props) {
  const router = useRouter()
  console.log('previousPathname', previousPathname)

  return (
    <Fragment>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container>
        <div className={clsx('xl:relative')}>
          <div className={clsx('mx-auto', 'max-w-2xl')}>
            {previousPathname && (
              <BackButton
                onClick={() => router.back()}
                className={clsx(
                  'mb-8',
                  'lg:absolute',
                  'lg:-left-5',
                  'lg:-mt-2',
                  'lg:mb-0',
                  'xl:-top-1.5',
                  'xl:left-0',
                  'xl:mt-0',
                  'z-20'
                )}
              />
            )}
            <article>
              <header className={clsx('flex', 'flex-col')}>
                <h1
                  className={clsx(
                    'mt-6',
                    'text-4xl',
                    'font-bold',
                    'tracking-tight',
                    'text-gray-900',
                    'sm:text-5xl'
                  )}
                >
                  {meta.title}
                </h1>
                <div className={clsx('order-first', 'flex', 'items-center', 'gap-x-4', 'text-xs')}>
                  <time
                    dateTime={meta.date}
                    className={clsx('flex', 'items-center', 'text-base', 'text-gray-500')}
                  >
                    {meta.date}
                  </time>
                  <a
                    href={'/'}
                    className={clsx(
                      'relative',
                      'z-10',
                      'rounded-full',
                      'bg-gray-50',
                      'px-3',
                      'py-1.5',
                      'font-medium',
                      'text-gray-600'
                    )}
                  >
                    {'Marketing'}
                  </a>
                </div>
              </header>
              <div className={clsx('w-full', 'mt-8')} aria-hidden />
              <Prose>{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </Fragment>
  )
}

export default memo(ArticleLayout)
