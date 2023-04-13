import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { Fragment, memo, ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

function Layout({ children }: Props) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

export default memo(Layout)
