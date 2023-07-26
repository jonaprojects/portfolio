import React, { useRef } from "react";
import { Dodecahedron } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const DodecahedronMesh = (props) => {
  const dodecahedronRef = useRef();

  useFrame(() => {
    dodecahedronRef.current.rotation.x += 0.01;
    dodecahedronRef.current.rotation.y += 0.01;
  });

  return (
    <Dodecahedron ref={dodecahedronRef} args={[1, 0]} scale={[2, 2, 2]} {...props}>
      <meshStandardMaterial color="orange" />
    </Dodecahedron>
  );
};

const DodecahedronShape = (props) => {
  const initialCameraPosition = [0, 0, 5];
  return (
    <Canvas camera={{ position: initialCameraPosition }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <DodecahedronMesh position={[-1.2, 0, 0]} scale={2.5} />
    </Canvas>
  );
};

export default DodecahedronShape;