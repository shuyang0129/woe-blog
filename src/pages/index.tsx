import BlogListSection from '@/components/BlogListSection'
import Container from '@/components/Container'
import HeroSection from '@/components/HeroSection'
import React, { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
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
