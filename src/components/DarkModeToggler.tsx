import React, { memo } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

function DarkModeToggler() {
  return (
    <button
      type="button"
      // dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20
      className="group rounded-full bg-white/90 p-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition"
    >
      <MoonIcon className="h-4 w-4 stroke-warm-gray-800" aria-hidden="true" />
      {/* <SunIcon className="h-5 w-5 fill-warm-gray-800" aria-hidden="true" /> */}
    </button>
  )
}

export default memo(DarkModeToggler)
