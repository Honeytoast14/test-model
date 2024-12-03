/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { Canvas} from '@react-three/fiber'
import { Gltf, Environment, CameraControls, useVideoTexture, useGLTF } from '@react-three/drei'
import { Suspense, useEffect } from 'react'
import './App.css'

export default function App() {
  return (
    <div className='App'>
    <Canvas camera={{ position: [3, 0.5, 3] }}>
      <Suspense fallback={null}>
      <Room />
      <Screen />

      <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color="#393939" side={THREE.BackSide} />
        </mesh>
      </Environment>
      <spotLight position={[7, 7, 7]} castShadow intensity={50} shadow-bias={-0.0001} />
      <ambientLight intensity={1} />
      <CameraControls />
      <gridHelper args={[30, 30, 30]} position-y="0" />
      <axesHelper args={[5]} />
      </Suspense>
    </Canvas>
    </div>
  )
}

function Room() {
  return (
    <>
      <Gltf src={'/room_no_screen.glb'} />
    </>
  )
}
function Screen() {
  const gltf = useGLTF('/screen.glb')
  const texture = useVideoTexture('/touchTheWood.mp4')

  useEffect(()=>{
    gltf.scene.traverse((child)=>{
      if(child.name === "screen001")
      child.material = new THREE.MeshBasicMaterial({ map: texture });
    })
  },[gltf,texture])

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  )
}