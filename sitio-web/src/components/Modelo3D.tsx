import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { TrackballControls, Center, OrthographicCamera } from "@react-three/drei"
//   devuelve al modelo #D basado en props
// interface Fullname {
//   modelo: JSX.IntrinsicElements['mesh'];
// }

function Modelo3D(props: any) {
  
    return (
      <>
      <h1> Modelo 3D </h1> 
      <Canvas>
      <TrackballControls />
      <ambientLight intensity={0.3} />
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
