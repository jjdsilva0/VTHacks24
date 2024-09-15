"use client"

// Import necessary dependencies
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import * as THREE from 'three';

// Reusable Model component that accepts a model path as a prop
function Model({ modelPath, ...props }) {
  const { scene } = useGLTF(modelPath); // Dynamically load model based on modelPath
  return <primitive object={scene} {...props} />;
}

// Scene component that renders the 3D environment and accepts modelPath as a prop
function Scene({ modelPath }) {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute", width: "50%" }}>
      <color attach="transparent" args={["#101010"]} />

      {/* Lighting setup */}
      <directionalLight 
        position={[2, 2, 3]} 
        intensity={0.8} 
        castShadow 
        shadow-mapSize-width={2048} 
        shadow-mapSize-height={2048}
      />
      <directionalLight 
        position={[-2, 1, 1]} 
        intensity={0.3} 
      />
      <directionalLight 
        position={[0, 3, -3]} 
        intensity={0.2} 
      />
      <ambientLight intensity={0.1} />

      {/* Render model with dynamic model path */}
      <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
        <Model modelPath={modelPath} scale={.25} />
      </PresentationControls>
    </Canvas>
  );
}

// Export the Scene component
export default Scene;
