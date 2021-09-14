import "./App.css";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere.js";

function App() {
  return (
    <div className="App">
      <div id="canvas-container">
        <Canvas>
          <ambientLight intensity={0.001} />
          <directionalLight color="#f0f" position={[1, 1, 1]} />
          <Sphere />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
