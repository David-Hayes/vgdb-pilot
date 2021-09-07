import { ReactNode } from 'react'
import { Header } from '../Header'

type MainProps = {
  children?: ReactNode
}

export const Main = ({ children }: MainProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
