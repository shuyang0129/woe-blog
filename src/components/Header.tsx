import clsx from 'clsx'
import React, { memo } from 'react'

import Container from '@/components/Container'
import DarkModeToggler from '@/components/DarkModeToggler'
import Logo from '@/components/Logo'

function Header() {
  return (
    <header>
      <Container className={clsx('py-6')}>
        <div className={clsx('flex-1', 'flex', 'items-center', 'justify-between', 'max-w-7xl')}>
          <Logo />
          <DarkModeToggler />
        </div>
      </Container>
    </header>
  )
}

export default memo(Header)
