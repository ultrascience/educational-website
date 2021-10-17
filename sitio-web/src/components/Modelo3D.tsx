/**
 * Componente que devuelve un modelo 3D basado en la prop que se el coloque
 */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { TrackballControls, Center, OrthographicCamera } from "@react-three/drei"

function Modelo3D(props: any) {
  
    return (
      <>
      <Canvas>
      <TrackballControls />
      <ambientLight intensity={0.8} />
      <directionalLight intensity={0.1} />
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={10} />
      <Suspense fallback={null}>
      <Center alignTop>
      {props.modelo}
      </Center>
      </Suspense>
      </Canvas>
      </>
    );
}

export default Modelo3D;
