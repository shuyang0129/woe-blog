import clsx from 'clsx'
import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
}

function Prose({ children, className }: Props) {
  return (
    <div className={clsx('prose', 'prose-zinc', 'dark:prose-invert', className)}>{children}</div>
  )
}

export default Prose
