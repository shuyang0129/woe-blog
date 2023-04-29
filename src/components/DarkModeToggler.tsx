'use client'
import clsx from 'clsx'
import React, { Fragment, memo } from 'react'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

function DarkModeToggler() {
  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
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
            'stroke-gray-900',
            'group-hover:stroke-gray-900/70',
            'transition-colors',
            'dark:hidden'
          )}
          aria-hidden="true"
        />
        <MoonIcon
          className={clsx(
            'h-6',
            'w-6',
            'stroke-gray-900',
            'group-hover:stroke-gray-900/70',
            'transition-colors',
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
