// components/FashionBackground.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function FashionShape() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <meshStandardMaterial
          color="#e91e63"
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>
    </Float>
  );
}

export default function FashionBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <FashionShape />
    </Canvas>
  );
}
