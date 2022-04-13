import React from "react";

export default function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -10, -5]}>
      <planeBufferGeometry attach="geometry" args={[1500, 1500]} />
      <meshStandardMaterial attach="material" color="grey" />
    </mesh>
  );
}
