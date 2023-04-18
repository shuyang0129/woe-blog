import ArrowLeftIcon from '@heroicons/react/24/outline/ArrowLeftIcon'
import clsx from 'clsx'
import React, { memo, MouseEvent } from 'react'

interface Props {
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void
  className?: string
}

function BackButton({ onClick, className }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Go back to articles"
      className={clsx(
        'group',
        'flex',
        'h-10',
        'w-10',
        'items-center',
        'justify-center',
        'rounded-full',
        'bg-white',
        'shadow-md',
        'shadow-zinc-800/5',
        'ring-1',
        'ring-zinc-900/5',
        'transition',
        'dark:border',
        'dark:border-zinc-700/50',
        'dark:bg-zinc-800',
        'dark:ring-0',
        'dark:ring-white/10',
        'dark:hover:border-zinc-700',
        'dark:hover:ring-white/20',
        className
      )}
    >
      <ArrowLeftIcon
        className={clsx(
          'h-4',
          'w-4',
          'stroke-gray-900',
          'transition',
          'group-hover:stroke-gray-900/70'
          // 'dark:stroke-zinc-500',
          // 'dark:group-hover:stroke-zinc-400'
        )}
      />
    </button>
  )
}

export default memo(BackButton)
