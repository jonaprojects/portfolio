import React, { useRef, useState, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// Memoize the CubeMesh component to prevent unnecessary re-renders
const CubeMesh = memo((props) => {
  const cubeRef = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta * 0.5;
  });

  return (
    <mesh
      {...props}
      ref={cubeRef}
      scale={1.5}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />

    </mesh>
  );
});

const Cube = (props) => {
  const initialCameraPosition = [0, 0, 5];
  return (
    <Canvas camera={{ position: initialCameraPosition }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CubeMesh position={[-1.2, 0, 0]} />
    </Canvas>
  );
};

export default Cube;