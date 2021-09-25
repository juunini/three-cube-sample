import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

const { innerWidth, innerHeight } = window;

export default function ExampleCamera(): JSX.Element {
  return (
    <PerspectiveCamera
      makeDefault
      fov={75}
      aspect={innerWidth / innerHeight}
      near={0.1}
      far={1000}
      position={[0, 0, 5]}
    />
  );
}
