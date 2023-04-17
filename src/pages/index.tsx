import Head from 'next/head'
import React, { Fragment } from 'react'

import BlogListSection from '@/components/BlogListSection'
import Container from '@/components/Container'
import HeroSection from '@/components/HeroSection'

function Home() {
  return (
    <Fragment>
      <Head>
        <title>Code Your Way to Software Engineering | ShuYang</title>
        <meta
          name="description"
          content="A blog covering programming and other topics of interest."
        />
      </Head>
      <Container.Outer>
        <HeroSection />
      </Container.Outer>
      <Container>
        <div className="w-full mt-16" />
        <BlogListSection />
      </Container>
    </Fragment>
  )
}

export default Home
