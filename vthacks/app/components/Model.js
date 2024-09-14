"use client"

// Import necessary dependencies
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import * as THREE from 'three';

// Model component that loads the GLTF file
function Model(props) {

  const { scene } = useGLTF("/triceratops.glb");

  // Render the model using the primitive object
  return <primitive object={scene} {...props} />;
}

// Scene component that renders the 3D environment
function Scene() {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: "absolute" }}>
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={null}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

// Export the Scene component
export default Scene;
