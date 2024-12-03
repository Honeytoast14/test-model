/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { useAspect, useVideoTexture} from '@react-three/drei'

export default function Model() {
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
        <VideoMaterial url="touchTheWood.mp4" />
    </mesh>
  )
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}
