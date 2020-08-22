import React, { useMemo } from 'react'
import { PulseLoader } from 'react-spinners'
type CustomProps = {
  color?: string
  fullWidth?: boolean
  loading?:boolean
}

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & CustomProps

const Button:React.FC<Props> = ({ children, disabled, color, fullWidth = false, loading = false, ...props }:Props) => {
  const btnClass = useMemo(() => {
    const tailwindColor = 'blue'
    let bgColor = `bg-${tailwindColor}-500`
    let hoverColor = `bg-${tailwindColor}-700`

    if (color && color === 'black') {
      bgColor = 'bg-black'
      hoverColor = 'bg-gray-900'
    }

    return `${bgColor} hover:${hoverColor} transition duration-150 ease-out text-white font-bold py-2 px-4 rounded ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`
  }, [disabled, color, fullWidth])

  return (
    <button className={btnClass} disabled={disabled} {...props}>
      {loading
        ? <PulseLoader size="10px" css='display: block; margin: 0 auto;' color="#ffffff" loading={loading} />
        : children
      }
    </button>
  )
}

export default Button
