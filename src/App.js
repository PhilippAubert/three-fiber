import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./components/Sphere.js";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <div id="canvas-container">
        <Canvas camera={{ position: [0, -4, 5], fov: 50 }}>
          <ambientLight intensity={0.001} />
          <directionalLight color="#f0f" position={[1, 1, 1]} />
          <Suspense>
            <Sphere />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
