import clsx from 'clsx'
import Image from 'next/image'
import { memo } from 'react'
import { TypeAnimation } from 'react-type-animation'
import Container from '@/components/Container'

function HeroSection() {
  return (
    <section className={clsx('bg-zinc-900')}>
      <div className={clsx('relative', 'isolate', 'overflow-hidden')}>
        <Image
          src="/images/galaxy.jpg"
          alt="Hero image"
          className={clsx(
            'absolute',
            'inset-0',
            '-z-10',
            'h-full',
            'w-full',
            'object-cover',
            'opacity-20'
          )}
          fill
        />
        <Container.Inner>
          <div className={clsx('mx-auto', 'max-w-2xl', 'py-24')}>
            <div className={clsx('mb-8', 'flex', 'items-center', 'justify-center')}>
              <TypeAnimation
                sequence={[
                  'Hello, World!',
                  1500,
                  'Hi, This is ShuYang.',
                  1500,
                  'Welcome to my blog. =)',
                  1500,
                ]}
                wrapper="div"
                speed={50}
                className={clsx(
                  'relative',
                  'rounded-full',
                  'px-3',
                  'py-1',
                  'text-sm',
                  'leading-6',
                  'text-zinc-400',
                  'ring-1',
                  'ring-white/10',
                  'transition',
                  'hover:ring-white/20'
                )}
              />
            </div>
            <div className={clsx('text-center')}>
              <h1
                className={clsx(
                  'text-4xl',
                  'font-bold',
                  'tracking-tight',
                  'text-zinc-100',
                  'sm:text-6xl'
                )}
              >
                Code Your Way to Software Engineering
              </h1>
              <p className={clsx('mt-6', 'text-lg', 'leading-8', 'text-zinc-300')}>
                A blog covering programming and other topics of interest.
              </p>
            </div>
          </div>
        </Container.Inner>
      </div>
    </section>
  )
}

export default memo(HeroSection)
