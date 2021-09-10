import { ReactNode } from 'react'

type CardType = {
  children?: ReactNode
  className?: string
}

export const Card = ({ children, className }: CardType) => {
  return (
    <div className={`bg-gray-700 rounded-md shadow-md p-5 ${className}`}>
      {children}
    </div>
  )
}
