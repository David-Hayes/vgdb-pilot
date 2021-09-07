import { ReactNode } from 'react'

type ContainerProps = {
  children?: ReactNode
  className?: string
}

export const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`max-w-screen-lg mx-auto px-5 ${className}`}>{children}</div>
)
