import React from 'react'

type LabelProps = {
  label?: {
    text: string
    htmlFor: string
  }
}

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & LabelProps

const Input:React.FC<Props> = ({ label, ...props }:Props) => {
  const inputClasses = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

  return (
    <div className="mt-5">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label.htmlFor}>{label.text}</label>
      )}
      <input className={inputClasses} {...props} />
    </div>
  )
}

export default Input
