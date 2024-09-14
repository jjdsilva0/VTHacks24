// pages/index.js
import dynamic from 'next/dynamic';

// Dynamically import ObjModel to avoid SSR issues with WebGL
const ObjModel = dynamic(() => import('../components/Model'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>3D Model Viewer</h1>
      <ObjModel modelPath="../public/Triceratops.obj" />
    </div>
  );
}
