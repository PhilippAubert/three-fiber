import React from "react";

export default function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[1500, 1500]} />
      <meshStandardMaterial attach="material" color="grey" />
    </mesh>
  );
}
