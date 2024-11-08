import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {


  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight
        intensity={3}
        groundColor="black"
      />
      <pointLight
        intensity={2} />
      <spotLight
        position={[-0, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        rotation={[-0.01, -0.2, -0.1]}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      />

    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)')
    setIsMobile(mediaQuery)

    const handleMediaQuery = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQuery)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQuery)
    }
  }, [])

  return (
    <Canvas
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 25
      }}
      gl={{
        preserveDrawingBuffer: true
      }}
      
      frameloop='demand'>
      <Suspense fallback={CanvasLoader}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false} />
        <Computers
          isMobile={isMobile} />
      </Suspense>
    </Canvas>
  )
}

export default ComputerCanvas