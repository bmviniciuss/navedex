import React, { memo, useMemo } from 'react'
import { HashLoader as HashSpinner } from 'react-spinners'

interface Props {
  className?: string
  loading:boolean
}

const HashLoader:React.FC<Props> = ({ className, loading }) => {
  const classes = useMemo(() => {
    return ['flex flex-col justify-center items-center h-full w-full', className].join(' ')
  }, [className])

  return (
    <div className={classes}>
      <HashSpinner size="35px" css='display: block; margin: 0 auto;' color="#1A202C" loading={loading} />
    </div>
  )
}

export default memo(HashLoader)
