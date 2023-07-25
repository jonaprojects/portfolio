import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function CubeMesh(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const cubeRef = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta * 0.5;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
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
}
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
