// pages/index.js
import dynamic from 'next/dynamic';

// Dynamically import the Scene to avoid SSR issues with WebGL
const ObjModel = dynamic(() => import('../components/Model'), {
  ssr: false,  // This ensures WebGL only runs on the client-side
});

export default function Home() {
  return (
    <div>
      <h1>3D Model Viewer</h1>
      {/* Render the dynamically imported 3D model */}
      <ObjModel />
    </div>
  );
}
