import { ReactNode } from 'react'

type CardType = {
  children?: ReactNode
}

export const Card = ({ children }: CardType) => {
  return <div className="bg-gray-700 rounded-md shadow-md p-5">{children}</div>
}
