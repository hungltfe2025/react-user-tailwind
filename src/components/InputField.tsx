import React from 'react'

interface InputFieldProps {
  id: string,
  name: string
}

function InputField({ id, name, ...restProps }: InputFieldProps) {
  return (
    <input
      type="text"
      name={id}
      id={name}
      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
      {...restProps}
    />
  )
}

export default InputField