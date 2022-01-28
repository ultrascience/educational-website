/**
 * Component: Modelo3D
 * Renders a 3D Model based on the given props.
 *
 */
import {Center, Html, OrbitControls, OrthographicCamera, useProgress} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React, {Suspense} from "react";

function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

function Modelo3D(props: any) {
    return (
        <>
            <Canvas frameloop="demand" mode="concurrent">
                <OrbitControls zoomSpeed={1.2}/>
                <ambientLight intensity={0.8}/>
                <directionalLight intensity={0.1}/>
                <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={20}/>
                <Suspense fallback={<Loader />}>
                    <Center alignTop>{props.modelo}</Center>
                </Suspense>
            </Canvas>
        </>
    );
}

export default Modelo3D;
