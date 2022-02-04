/**
 * Component: Modelo3D
 * Renders a 3D Model based on the given props.
 *
 */
import { Center, Html, OrbitControls, OrthographicCamera, useProgress } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Modelo3DProps } from "./../../Tipos";


function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

const Model = (props:Modelo3DProps) => {
  const url = "http://localhost:8080/api/rocks/get-model3D/" + props.idModelSelected;
  const gltf = useLoader(GLTFLoader, url);
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

function Modelo3D(props: Modelo3DProps) {
    return (
        <>
            <Canvas frameloop="demand" mode="concurrent">
                <OrbitControls zoomSpeed={1.2}/>
                <ambientLight intensity={0.8}/>
                <directionalLight intensity={0.1}/>
                <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={5}/>
                <Suspense fallback={<Loader />}>
                    <Center alignTop>
                    <Model idModelSelected={props.idModelSelected}/>
                    </Center>
                </Suspense>
            </Canvas>
        </>
    );
}

export default Modelo3D;
