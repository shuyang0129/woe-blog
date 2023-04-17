import clsx from 'clsx'
import React, { memo } from 'react'
import PrimaryButton from '../PrimaryButton'

interface Props {
  className?: string
}

function NewsLetter({ className }: Props) {
  return (
    <div className={clsx('py-8', 'lg:flex', 'lg:items-center', 'lg:justify-between', className)}>
      <div>
        <h3 className={clsx('text-sm', 'font-semibold', 'leading-6', 'text-gray-900')}>
          Subscribe to our newsletter
        </h3>
        <p className={clsx('mt-2', 'text-sm', 'leading-6', 'text-gray-700')}>
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
      </div>
      <form className={clsx('mt-6', 'sm:flex', 'sm:max-w-md', 'lg:mt-0')}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className={clsx(
            'w-full',
            'min-w-0',
            'appearance-none',
            'rounded-md',
            'border-0',
            'bg-gray-50',
            'px-3',
            'py-1.5',
            'text-base',
            'text-gray-700',
            'shadow-sm',
            'ring-1',
            'ring-inset',
            'ring-gray-300',
            'placeholder:text-gray-500',
            // 'focus:ring-2',
            // 'focus:ring-inset',
            // 'focus:ring-indigo-600',
            'sm:w-56',
            'sm:text-sm',
            'sm:leading-6'
          )}
          placeholder="Enter your email"
        />
        <div className={clsx('mt-4', 'sm:ml-4', 'sm:mt-0', 'sm:flex-shrink-0')}>
          <PrimaryButton type="submit">Subscribe</PrimaryButton>
        </div>
      </form>
    </div>
  )
}

export default memo(NewsLetter)
