import clsx from 'clsx'
import React, { memo } from 'react'

interface Post {
  id: number
  title: string
  href: string
  description: string
  date: string
  datetime: string
  category: { title: string; href: string }
}

interface Props {
  post: Post
}

function BlogCard({ post }: Props) {
  return (
    <article
      key={post.id}
      className={clsx('flex', 'max-w-xl', 'flex-col', 'items-start', 'justify-between')}
    >
      <div className={clsx('flex', 'items-center', 'gap-x-4', 'text-xs')}>
        <time dateTime={post.datetime} className={clsx('text-gray-500')}>
          {post.date}
        </time>
        <a
          href={post.category.href}
          className={clsx(
            'relative',
            'z-10',
            'rounded-full',
            'bg-gray-50',
            'px-3',
            'py-1.5',
            'font-medium',
            'text-gray-600'
          )}
        >
          {post.category.title}
        </a>
      </div>
      <div className={clsx('group', 'relative')}>
        <h3
          className={clsx(
            'mt-3',
            'text-lg',
            'font-semibold',
            'leading-6',
            'text-gray-900',
            'group-hover:text-gray-600'
          )}
        >
          <a href={post.href}>{post.title}</a>
        </h3>
        <p className={clsx('mt-5', 'line-clamp-3', 'text-sm', 'leading-6', 'text-gray-700')}>
          {post.description}
        </p>
      </div>
      <div className={clsx('group', 'mt-4')}>
        <a
          href={'/'}
          className={clsx(
            'text-sm',
            'font-semibold',
            'leading-6',
            'text-transparent',
            'bg-clip-text',
            'gradient-primary',
            'flex',
            'items-center'
          )}
          aria-describedby="featured-post"
        >
          <span>Continue reading</span>
          <span aria-hidden="true" className={clsx('ml-1', 'group-hover:ml-2', 'transition-all')}>
            &rarr;
          </span>
        </a>
      </div>
    </article>
  )
}

export default memo(BlogCard)
