import React, { useMemo, memo } from 'react'

interface Props {
  prefix?: string
  text: string
  className?: string
  type: 'success' | 'error'
}

const Alert:React.FC<Props> = ({ prefix, text, type, className }) => {
  const componentClassName = useMemo(() => {
    const color = type === 'success' ? 'green' : 'red'
    return [`bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 rounded relative`, className].join(' ')
  }, [className, type])

  return (
    <div className={componentClassName} role="alert">
      {prefix && (
        <strong className="font-bold">{prefix}</strong>
      )}
      <span className="block sm:inline">{text}</span>
    </div>
  )
}

export default memo(Alert)
