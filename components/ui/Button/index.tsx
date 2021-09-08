import { createElement, FC, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLBodyElement> {}

export const Button: FC<ButtonProps> = ({ children, type, onClick }) => {
  return createElement(
    'button',
    {
      className:
        'bg-primary hover:bg-primaryAlt py-2 px-4 rounded-md font-bold',
      type: type,
      onClick: onClick,
    },
    children
  )
}
