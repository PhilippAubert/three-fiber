import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./components/Sphere.js";
import { Suspense } from "react";
import Lights from "./components/Lights.js";
import GroundPlane from "./components/GroundPlane";
import BackDrop from "./components/BackDrop";

function App() {
  return (
    <div className="App">
      <div id="canvas-container">
        <Canvas camera={{ position: [1, -2, -5], fov: 50 }}>
          <OrbitControls />
          <Lights brightness={50} color={"#f0f"} />
          <Suspense fallback={null}>
            <Sphere />
            <GroundPlane />
            <BackDrop />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
