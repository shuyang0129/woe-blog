import SocialIcons from '@/components/icons/SocialIcons'
import clsx from 'clsx'
import React, { memo } from 'react'

const socialConnections = [
  {
    name: 'Facebook',
    href: '#',
    icon: SocialIcons.Facebook,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: SocialIcons.Instagram,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: SocialIcons.Twitter,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: SocialIcons.GitHub,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: SocialIcons.YouTube,
  },
]

interface Props {
  className?: string
}

function SocialConnections({ className }: Props) {
  return (
    <div className={clsx('flex', 'gap-x-6', className)}>
      {socialConnections.map(item => (
        <a
          key={item.name}
          href={item.href}
          className={clsx('text-gray-400', 'hover:text-gray-500')}
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export default memo(SocialConnections)
