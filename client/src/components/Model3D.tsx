/**
 * Component: Modelo3D
 * Renders a 3D Model based on the given props.
 *
 */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  TrackballControls,
  Center,
  OrthographicCamera,
} from "@react-three/drei";

function Modelo3D(props: any) {
  return (
    <>
      <Canvas>
        <TrackballControls />
        <ambientLight intensity={0.8} />
        <directionalLight intensity={0.1} />
        <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={10} />
        <Suspense fallback={null}>
          <Center alignTop>{props.modelo}</Center>
        </Suspense>
      </Canvas>
    </>
  );
}

export default Modelo3D;
