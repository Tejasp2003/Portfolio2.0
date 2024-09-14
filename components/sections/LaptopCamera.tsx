import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";

const LaptopCamera = ({ children } : {
  children: React.ReactNode;
}) => {
  const groupRef = useRef() as any;

  useFrame((state, delta) => {
    easing.dampE(
      groupRef.current?.rotation,
      [-state.pointer.y / 6, -state.pointer.x / 14, 0],
      0.25,
      delta
    );
  });
  return <group ref={groupRef}>{children}</group>;
};

export default LaptopCamera;
