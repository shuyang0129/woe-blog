import clsx from 'clsx'
import React, { memo } from 'react'

function Divider() {
  return <div className={clsx('w-full', 'h-[1px]', 'bg-zinc-100')} aria-hidden />
}

export default memo(Divider)
