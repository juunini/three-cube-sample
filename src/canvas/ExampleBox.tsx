import React, { useRef } from "react";
import { Mesh } from "three";
import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ExampleBox(): JSX.Element {
  const mesh = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Box ref={mesh}>
      <boxGeometry />
      <meshStandardMaterial color={0x00ff00} />
    </Box>
  );
}
