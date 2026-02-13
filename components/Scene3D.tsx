import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const HeartShape = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  const shape = useMemo(() => {
    const x = 0, y = 0;
    const heartShape = new THREE.Shape();
    heartShape.moveTo(x + 0.5, y + 0.5);
    heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
    heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
    heartShape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9);
    heartShape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7);
    heartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y);
    heartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);
    return heartShape;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Add some random phase to rotation so they don't all look identical
      meshRef.current.rotation.y += 0.01 * props.speed;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * props.speed + props.position[0]) * 0.1;
    }
  });

  return (
    <Float speed={props.speed} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={props.position}
        scale={hovered ? props.scale * 1.2 : props.scale}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        rotation={[0, 0, Math.PI]} 
      >
        <extrudeGeometry args={[shape, { depth: 0.2, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 }]} />
        <meshStandardMaterial 
          color={props.color} 
          roughness={0.2} 
          metalness={0.5}
          emissive={props.color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

export const Scene3D: React.FC = () => {
  // Generate many hearts
  const heartCount = 40;
  const hearts = useMemo(() => {
    const colors = ['#ef4444', '#ec4899', '#db2777', '#f43f5e', '#be123c', '#fda4af'];
    return new Array(heartCount).fill(0).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 25, // x spread
        (Math.random() - 0.5) * 20, // y spread
        (Math.random() - 0.5) * 15 - 5 // z spread (mostly behind)
      ] as [number, number, number],
      scale: 0.3 + Math.random() * 0.7,
      speed: 0.5 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      key: i
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }} gl={{ alpha: true }}>
        {/* Adjusted lights since we removed the Environment map */}
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1.5} color="#fff0f5" />
        <pointLight position={[-10, -5, -10]} intensity={1} color="#ffb6c1" />
        <directionalLight position={[0, 5, 5]} intensity={1} color="#fff" />
        
        {hearts.map((h) => (
          <HeartShape 
            key={h.key} 
            position={h.position} 
            scale={h.scale} 
            speed={h.speed} 
            color={h.color} 
          />
        ))}
        
        {/* Removed <Environment /> entirely to guarantee transparent background */}
      </Canvas>
    </div>
  );
};