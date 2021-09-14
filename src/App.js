import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./components/Sphere.js";
import { Suspense } from "react";
import Lights from "./components/Lights.js";

function App() {
  return (
    <div className="App">
      <div id="canvas-container">
        <Canvas camera={{ position: [1, -2, 5], fov: 50 }}>
          <Lights brightness={10} color={"#f0f"} />
          <Suspense fallback={null}>
            <Sphere />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
