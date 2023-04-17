import clsx from 'clsx'
import localFont from 'next/font/local'
import Link from 'next/link'
import React, { memo } from 'react'

const logo = localFont({ src: '../pages/fonts/Bungee_Shade/BungeeShade-Regular.ttf' })

function Logo() {
  return (
    <Link href={'/'}>
      <h2 className={clsx(logo.className, 'text-gray-900')}>ShuYang</h2>
    </Link>
  )
}

export default memo(Logo)
