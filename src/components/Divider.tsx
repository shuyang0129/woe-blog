import clsx from 'clsx'
import React, { memo } from 'react'

function Divider() {
  return <div className={clsx('w-full', 'h-[1px]', 'bg-gray-300/30')} aria-hidden />
}

export default memo(Divider)
