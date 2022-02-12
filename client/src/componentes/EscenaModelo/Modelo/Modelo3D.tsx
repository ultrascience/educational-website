/**
 * Component: Modelo3D
 * Renders a 3D Model based on the given props.
 *
 */
import { Center, Environment, Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Modelo3DProps } from "./../../Tipos";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const Model = (props: Modelo3DProps) => {
  let directory = "";
  const boxRef: any = useRef();
  useFrame(() => {
    boxRef.current.rotation.y += 0.1;
  });

  if (props.type === "modelo3D") {
    directory = "get-model3D/";
  } else {
    directory = "get-chemical-formula/";
  }
  const url = "http://localhost:8080/api/rocks/" + directory + props.idModelSelected;
  // Load the model using useGLTF
  const { scene } = useGLTF(url);

  return (
    <>
      <primitive object={scene} scale={0.1} ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25} />
    </>
  );
};

function Modelo3D(props: Modelo3DProps) {
  if (props.type === "modelo3D") {
    return (
      <>
        <Canvas frameloop="demand" mode="concurrent" dpr={[1, 2]} camera={{ fov: 70 }}>
          <OrbitControls zoomSpeed={2.0} />
          <ambientLight intensity={0.3} />
          <directionalLight intensity={0.1} />
          <Suspense fallback={<Loader />}>
            <Environment
              background={true}
              files={'a.hdr'}
              path={'/'}
            />
            <Center alignTop>
              <Model idModelSelected={props.idModelSelected} type={props.type} />
            </Center>
          </Suspense>
        </Canvas>
      </>
    );
  }
  else {

    return (
      <>
        <Canvas dpr={[1, 2]} camera={{ fov: 70 }} style={{ backgroundColor: '#000000' }}>
          <OrbitControls zoomSpeed={2.0} />
          <ambientLight intensity={0.3} />
          <directionalLight intensity={0.1} />
          <Suspense fallback={<Loader />}>
            <Center alignTop>
              <Model idModelSelected={props.idModelSelected} type={props.type} />
            </Center>
          </Suspense>
        </Canvas>
      </>
    );
  }
}

export default Modelo3D;
