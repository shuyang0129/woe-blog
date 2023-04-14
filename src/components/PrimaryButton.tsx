import clsx from 'clsx'
import React, { ButtonHTMLAttributes, ReactNode, memo } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
}

function PrimaryButton({ className, children, ...props }: Props) {
  return (
    <button
      className={clsx(
        'flex',
        'w-full',
        'items-center',
        'justify-center',
        'rounded-md',
        'bg-zinc-700',
        'px-3',
        'py-2',
        'text-sm',
        'font-semibold',
        'text-white',
        'shadow-sm',
        'hover:bg-zinc-500',
        'focus-visible:outline',
        'focus-visible:outline-2',
        'focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default memo(PrimaryButton)
