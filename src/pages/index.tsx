import BlogListSection from '@/components/BlogListSection'
import Container from '@/components/Container'
import HeroSection from '@/components/HeroSection'
import React, { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
      <HeroSection />
      <div className="w-full mt-16" />
      <Container.Outer>
        <BlogListSection />
      </Container.Outer>
    </Fragment>
  )
}

export default Home
