import { memo } from 'react'
import Container from './Container'

function HeroSection() {
  return (
    <section className="bg-zinc-900">
      <Container>
        <div className="relative isolate overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            // src="https://images.unsplash.com/photo-1570284613060-766c33850e00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            // src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
          />
          <div className="mx-auto max-w-2xl py-24">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-400 ring-1 ring-white/10 hover:ring-white/20">
                Welcome to my blog. <span className="text-lg">☺</span>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">
                Code Your Way to Software Engineering
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                A blog covering programming and other topics of interest.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default memo(HeroSection)
