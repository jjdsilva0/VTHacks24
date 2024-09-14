// components/ObjModel.js
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useLoader } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Model = ({ modelPath }) => {
  const obj = useLoader(OBJLoader, modelPath);
  const ref = useRef();

  // Animate model (rotation)
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return <primitive ref={ref} object={obj} scale={1} />;
};

const ObjModel = ({ modelPath }) => {
  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model modelPath={modelPath} />
      <OrbitControls />
    </Canvas>
  );
};

export default ObjModel;
