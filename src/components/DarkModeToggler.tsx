'use client'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import React, { Fragment, memo } from 'react'

function DarkModeToggler() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <Fragment>
      <button
        type="button"
        aria-label="Toggle dark mode"
        className={clsx('group', 'p-2')}
        onClick={toggleDarkMode}
      >
        <SunIcon
          className={clsx(
            'h-6',
            'w-6',
            'stroke-zinc-700/80',
            'group-hover:stroke-zinc-700',
            'dark:hidden'
          )}
          aria-hidden="true"
        />
        <MoonIcon
          className={clsx(
            'h-6',
            'w-6',
            'stroke-zinc-100/80',
            'group-hover:stroke-zinc-100',
            'hidden',
            'dark:block'
          )}
          aria-hidden="true"
        />
      </button>
    </Fragment>
  )
}

export default memo(DarkModeToggler)
