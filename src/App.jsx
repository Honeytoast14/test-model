/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Canvas } from '@react-three/fiber'
import { useAspect, useVideoTexture} from '@react-three/drei'

export default function App() {
  return (
    <Canvas orthographic>
      <Scene />
    </Canvas>
  )
}

function Scene() {
  const size = useAspect(1800, 1000)
  return (
    <mesh scale={size}>
      <planeGeometry />
        <VideoMaterial url="/touchTheWood.mp4" />
    </mesh>
  )
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url,{muted:true,playsInline:true,})
  return <meshBasicMaterial map={texture} toneMapped={false} />
}