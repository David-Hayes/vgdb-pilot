import React, { createElement, FC, ReactNode } from 'react'

type HeadingProps = {
  children: ReactNode
  asElm?: 'h1' | 'h2' | 'h3'
  className?: string
}

const Heading: FC<HeadingProps> = ({ children, asElm = 'h1', className }) =>
  createElement(asElm, { className }, children)

export const H1: FC<HeadingProps> = ({
  children,
  asElm = 'h1',
  className = '',
}) => (
  <Heading asElm={asElm} className={`text-3xl font-bold mb-5 ${className}`}>
    {children}
  </Heading>
)

export const H2: FC<HeadingProps> = ({
  children,
  asElm = 'h2',
  className = '',
}) => (
  <Heading asElm={asElm} className={`text-2xl font-bold mb-3 ${className}`}>
    {children}
  </Heading>
)
