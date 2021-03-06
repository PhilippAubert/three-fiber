import React from "react";

export default function Lights({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}
