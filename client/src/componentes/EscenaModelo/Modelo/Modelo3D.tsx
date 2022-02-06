/**
 * Component: Modelo3D
 * Renders a 3D Model based on the given props.
 *
 */
import { Center, Html, OrbitControls, OrthographicCamera, useGLTF, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Modelo3DProps } from "./../../Tipos";

function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

const Model = (props:Modelo3DProps) => {
  const url = "http://localhost:8080/api/rocks/"+props.endpoint + props.idModelSelected;
  const gltf = useGLTF(url);
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
                <OrbitControls zoomSpeed={2.0}/>
                <ambientLight intensity={0.8}/>
                <directionalLight intensity={0.1}/>
                <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={200}/>
                <Suspense fallback={<Loader />}>
                    <Center alignTop>
                    <Model idModelSelected={props.idModelSelected} endpoint={props.endpoint}/>
                    </Center>
                </Suspense>
            </Canvas>
        </>
    );
}

export default Modelo3D;
