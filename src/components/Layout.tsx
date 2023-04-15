import Footer from '@/components/Footer'
import Header from '@/components/Header'
import clsx from 'clsx'
import React, {  memo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className={clsx('flex', 'flex-col', 'h-screen')}>
      <Header />
      <main className={clsx('flex-1')}>{children}</main>
      <Footer />
    </div>
  )
}

export default memo(Layout)
