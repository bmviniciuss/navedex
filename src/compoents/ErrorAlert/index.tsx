import React, { useMemo, memo } from 'react'

interface Props {
  prefix?: string
  text: string
  className?: string
}

const ErrorAlert:React.FC<Props> = ({ prefix, text, className }) => {
  const componentClassName = useMemo(() => {
    return ['bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative', className].join(' ')
  }, [className])

  return (
    <div className={componentClassName} role="alert">
      {prefix && (
        <strong className="font-bold">Holy smokes!</strong>
      )}
      <span className="block sm:inline">{text}</span>
    </div>
  )
}

export default memo(ErrorAlert)
