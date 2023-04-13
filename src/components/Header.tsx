import localFont from 'next/font/local'
import React, { memo, useState } from 'react'

import DarkModeToggler from './DarkModeToggler'

const logo = localFont({ src: '../pages/fonts/Bungee_Shade/BungeeShade-Regular.ttf' })
function Header() {
  return (
    <header className="bg-white flex items-center justify-center p-6 lg:px-8">
      <div className="flex-1 flex items-center justify-between max-w-7xl">
        <h2 className={`${logo.className}`}>ShuYang</h2>
        <DarkModeToggler />
      </div>
    </header>
  )
}

export default memo(Header)
