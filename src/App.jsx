/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { Canvas} from '@react-three/fiber'
import { Gltf, Environment, CameraControls, Loader } from '@react-three/drei'
import { Suspense } from 'react'
import './App.css'

export default function App() {
  return (
    <div className='App'>
    <Canvas camera={{ position: [-1, 0.5, 3] }}>
      <Suspense fallback={null}>
      <Scene />

      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color="#393939" side={THREE.BackSide} />
        </mesh>
      </Environment>
      <spotLight position={[7, 7, 7]} castShadow intensity={50} shadow-bias={-0.0001} />
      <ambientLight intensity={1} />
      <CameraControls />
      <gridHelper args={[30, 30, 30]} position-y=".01" />
      <axesHelper args={[5]} />
      </Suspense>
    </Canvas>
    <Loader/>
    </div>
  )
}

function Scene() {
  return (
    <>
      <Gltf src={'room_no_animation.glb'} />
    </>
  )
}