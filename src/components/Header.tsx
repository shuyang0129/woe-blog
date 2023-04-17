import Container from '@/components/Container'
import DarkModeToggler from '@/components/DarkModeToggler'
import clsx from 'clsx'
import localFont from 'next/font/local'
import React, { memo } from 'react'

const logo = localFont({ src: '../pages/fonts/Bungee_Shade/BungeeShade-Regular.ttf' })

function Header() {
  return (
    <header>
      <Container className={clsx('py-6')}>
        <div className={clsx('flex-1', 'flex', 'items-center', 'justify-between', 'max-w-7xl')}>
          <h2 className={clsx(logo.className, 'text-gray-900')}>ShuYang</h2>
          <DarkModeToggler />
        </div>
      </Container>
    </header>
  )
}

export default memo(Header)
