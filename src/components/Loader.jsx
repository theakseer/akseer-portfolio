import React from 'react'
import {Html, useProgress} from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress()

  return (
    <Html>
      <p className='text-sm text-white mt-10'>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader