import React from 'react'

type InputProps = {
  label?: string
  name: string
  type?: string
  placeholder?: string
  defaultValue?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  defaultValue,
  required = false,
  onChange,
}: InputProps) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="cursor-pointer block mb-1">
          {label} {required && '*'}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="bg-gray-800 border-none rounded-md w-full"
        onChange={onChange}
        required={required}
      />
    </div>
  )
}

type InputIcon = {
  icon?: string
}

const InputIcon = ({ icon }: InputIcon) => {
  switch (icon) {
    case 'email':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
            clipRule="evenodd"
          />
        </svg>
      )
    case 'password':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      )
    case 'username':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      )
    default:
      return <></>
  }
}
