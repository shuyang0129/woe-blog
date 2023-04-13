import DarkModeToggler from '@/components/DarkModeToggler'
import clsx from 'clsx'
import localFont from 'next/font/local'
import React, { memo } from 'react'

const logo = localFont({ src: '../pages/fonts/Bungee_Shade/BungeeShade-Regular.ttf' })

function Header() {
  return (
    <header
      className={clsx(
        'bg-white',
        'dark:bg-zinc-700',
        'flex',
        'items-center',
        'justify-center',
        'p-6',
        'lg:px-8',
        'transition',
        'duration-200'
      )}
    >
      <div className={clsx('flex-1', 'flex', 'items-center', 'justify-between', 'max-w-7xl')}>
        <h2 className={clsx(logo.className, 'text-zinc-700', 'dark:text-zinc-100')}>ShuYang</h2>
        <DarkModeToggler />
      </div>
    </header>
  )
}

export default memo(Header)
