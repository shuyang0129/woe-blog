import React, { Fragment, ReactNode, memo } from 'react'
import Container from '@/components/Container'
import Prose from '@/components/Prose'
import clsx from 'clsx'
import Head from 'next/head'

interface Meta {
  author: string
  date: string
  title: string
  description: string
}

interface Props {
  meta: Meta
  children?: ReactNode
}

function ArticleLayout({ meta, children }: Props) {
  return (
    <Fragment>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container>
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  {meta.title}
                </h1>
                <div className={clsx('order-first', 'flex', 'items-center', 'gap-x-4', 'text-xs')}>
                  <time dateTime={meta.date} className="flex items-center text-base text-gray-500">
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
