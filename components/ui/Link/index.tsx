import React, { ReactNode } from 'react'
import NextLink from 'next/link'

type LinkProps = {
  children: ReactNode
  href: string
  title?: string
}

export const LinkClassNames =
  'text-primary hover:text-primaryAlt border-b border-primary hover:border-primaryAlt border-dashed hover:border-solid'

export const Link = ({ href, children, title }: LinkProps) => {
  return (
    <NextLink href={href}>
      <a title={title} className={LinkClassNames}>
        {children}
      </a>
    </NextLink>
  )
}
