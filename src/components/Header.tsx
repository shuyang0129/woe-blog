import clsx from 'clsx'
import React, { memo } from 'react'

import Container from '@/components/Container'
import DarkModeToggler from '@/components/DarkModeToggler'
import Logo from '@/components/Logo'

function Header() {
  return (
    <header className={clsx('sticky', 'top-0', 'z-50')}>
      <Container.Outer>
        <Container.Inner className={clsx('py-6', 'bg-white', 'dark:bg-zinc-900')}>
          <div className={clsx('flex-1', 'flex', 'items-center', 'justify-between', 'max-w-7xl')}>
            <Logo />
            <DarkModeToggler />
          </div>
        </Container.Inner>
      </Container.Outer>
    </header>
  )
}

export default memo(Header)
