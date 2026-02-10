"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const particlePositions = (() => {
  const count = 1400;
  const array = new Float32Array(count * 3);
  let seed = 42;
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let i = 0; i < count; i += 1) {
    const radius = 6 + random() * 6;
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);
    const index = i * 3;
    array[index] = radius * Math.sin(phi) * Math.cos(theta);
    array[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
    array[index + 2] = radius * Math.cos(phi);
  }

  return array;
})();

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => particlePositions, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#8fb0ff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
        transparent
      />
    </points>
  );
}

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const { pointer } = state;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.5,
      0.08
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.4,
      0.08
    );
    groupRef.current.rotation.z += delta * 0.05;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.6} rotationIntensity={1.4} floatIntensity={1.4}>
        <mesh position={[-1.2, 0.3, 0]} castShadow>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshStandardMaterial
            color="#4f7cff"
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[1.4, -0.2, -0.4]} castShadow>
          <torusKnotGeometry args={[0.6, 0.2, 180, 32]} />
          <meshStandardMaterial
            color="#8b5cf6"
            roughness={0.15}
            metalness={0.8}
          />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.6}>
        <mesh position={[0.2, 1.2, 0.6]} castShadow>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#c7d2fe"
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-border bg-surface/80 shadow-[0_30px_80px_rgba(15,23,42,0.4)]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        className="absolute inset-0"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 4]} intensity={1.4} />
        <pointLight position={[-6, -3, 6]} intensity={1} color="#4f7cff" />
        <ParticleField />
        <FloatingShapes />
      </Canvas>
      <div className="pointer-events-none relative z-10 flex h-full flex-col justify-between p-6">
        <div className="text-xs uppercase tracking-[0.3em] text-muted">
          Immersive 3D Lab
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            Real-time visual intelligence
          </p>
          <p className="mt-2 text-sm text-muted">
            Responsive 3D elements tuned to your motion and scroll.
          </p>
        </div>
      </div>
    </div>
  );
}
