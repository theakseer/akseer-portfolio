import {Suspense, useState, useRef} from 'react'
import { SectionWrapper } from '../../hoc'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'


const Stars = (props) => {
  const ref = useRef()
  const sphere = random.inSphere(new Float32Array(4000), { radius:1.2})
  useFrame((state, delta)=>{
    ref.current.rotation.x-=delta/10
    ref.current.rotation.y-=delta/10
  })
  return (
    <group>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="white"
          size={0.003}
          sizeAttentuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
const  StarsCanvas = () => {
  return (
    <div
      className='w-full h-full absolute inset-0 -z-10'
    >
      <Canvas
        camera={{
          position:[0, 0,1]
        }}
      >
        <Suspense
          fallback={null}
        >
          <Stars></Stars>
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  )
}

export default StarsCanvas