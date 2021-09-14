import React from "react";
import { useState } from "react";

export default function Sphere() {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  function handleChange() {
    setHovered(!hovered);
    setActive(!active);
  }

  return (
    <mesh onClick={handleChange} scale={active ? 0.5 : 2}>
      <octahedronGeometry args={[1, 100, 100]} />
      <meshStandardMaterial color={hovered ? "#ff0" : "#fff"} />
    </mesh>
  );
}
