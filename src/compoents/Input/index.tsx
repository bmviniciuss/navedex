import React, { useMemo } from 'react'

type LabelProps = {
  label?: {
    text: string
    htmlFor: string
  }
  error: string | undefined
}

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & LabelProps

const Input:React.FC<Props> = ({ label, error, ...props }:Props) => {
  const inputClass = useMemo(() => {
    const baseCss = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    let classes = baseCss
    if (props.disabled) {
      classes = `${baseCss} bg-gray-200 cursor-not-allowed`
    }

    if (error) {
      classes = `${baseCss} mb-3 border-red-500`
    }

    return classes
  }, [props.disabled, error])

  return (
    <div className="mt-5">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label.htmlFor}>{label.text}</label>
      )}
      <input className={inputClass} {...props} />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  )
}

export default Input
