"use client"

import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantStyles =
    variant === 'primary'
      ? 'bg-[#D4622A] text-white px-4 py-2 hover:bg-[#c5571f] focus:ring-[#D4622A]/40'
      : variant === 'secondary'
      ? 'bg-white border border-gray-200 text-gray-700 px-3 py-2 hover:bg-gray-50 focus:ring-gray-300'
      : 'bg-transparent text-white px-3 py-2 hover:bg-black/10'

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...rest}>
      {children}
    </button>
  )
}
