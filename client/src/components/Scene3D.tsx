import axios from "axios";
import React, { useEffect, useState } from "react";
import Augen from "../models3D/Augen";
import "../styles/index.css";
import "../styles/sceneModel.css";
import Button from "./Button";
import Model3D from "./Model3D";
import ModelInformation from "./ModelInformation";
import { ModelProps, SceneProps } from "./Types";

const KeysToComponentMap: { [index: string]: any } = {
  augen: Augen,
  danburita: Augen,
};

/**
 * Component: Scene3D
 * Renders a 3D scene with the model and its information.
 */
function Scene3D(props: SceneProps): JSX.Element {
  const [currentModel, setCurrentModel] = useState<ModelProps>({} as ModelProps);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [mountInformation, setMountInformation] = useState(false);
  // hook to syle the modelBox using tailwindcss
  const [modelBoxStyle, setModelBoxStyle] = useState(
      "md:col-span-11 md:row-span-9 md:h-full bg-pink-100"
  );

  /**
     * Function: ChangeStyleModel
     * Changes the style to show or hide the information of the model.
     */
  function ChangeStyleModel() {
    setMountInformation(!mountInformation);
    setModelBoxStyle(
        mountInformation
            ? "md:col-span-11 md:row-span-9 md:h-full bg-pink-100"
            : "md:col-span-5 md:row-span-9 md:h-full bg-pink-100"
    );
  }

  // asigna currentModel con el modelo proporcinado el servidor en http://localhost:3000/api/rocks/get-rock/:id
  // y lo renderiza en el componente
  useEffect(() => {
    axios.get(`http://localhost:8080/api/rocks/get-rock/${props.idModelSelected}`)
      .then(res => {
        setCurrentModel(res.data);
        setIsLoaded(true);
      })
      .catch(err => {
        console.log(err);
        setError(err);
        setIsLoaded(true);

      });


  }, []);

  function ModelBox(): JSX.Element {
    return (

      <div className={modelBoxStyle}>
        {/* Mount the glb model (based on the KeysToComponentMap) to Model3D component */}
        <Model3D
          modelo={React.createElement(
            KeysToComponentMap[currentModel.name],
            null,
            null
          )}
        />
        {/* Agrega un boton svg encima de este div para poder cambiar a ventana completa*/}
        <svg
          className="absolute bottom-0 right-0 m-4 cursor-pointer"
          onClick={ChangeStyleModel}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        > 
          <path
            d="M24 0C10.7 0 0 10.7 0 24C0 37.3 10.7 48 24 48C37.3 48 48 37.3 48 24C48 10.7 37.3 0 24 0ZM24 44C14.3 44 6 34.7 6 24C6 14.3 14.3 6 24 6C34.7 6 44 14.3 44 24C44 34.7 34.7 44 24 44Z"
            fill="#F2F2F2"
          />
          <path
            d="M24 32C19.3 32 16 28.7 16 24C16 19.3 19.3 16 24 16C28.7 16 32 19.3 32 24C32 28.7 28.7 32 24 32Z"
            fill="#F2F2F2"
          />
          <path
            d="M24 20C22.7 20 21.5 19.3 21.5 18C21.5 16.7 22.7 16 24 16C25.3 16 26.5 16.7 26.5 18C26.5 19.3 25.3 20 24 20Z"
            fill="#F2F2F2"
          />
        </svg>
      </div>

    );
  }

  // Funcion: genera un css grid utilizando tailwindcss
  // la caja del modelo tiene una altura de 100% y una anchura de 50%
  // la caja de informacion del modelo tiene una altura de 100% y una anchura de 50%
  // la caja de informacion del modelo se muestra o no dependiendo de la variable mountInformation
  function GridScene(): JSX.Element {
    return (
      <div className="grid grid-cols-11 grid-rows-11 h-screen w-screen">
         <ModelBox />
        {mountInformation && (
          <div className="md:col-span-6 h-full w-full bg-blue-600">
            <ModelInformation
              namemodel={currentModel.name}
              information={["a", "b"]}
            />
          </div>
        )}
      </div>

    );
  }

  if (error) {
    return <div>Error loading the model</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <GridScene />
      </>
    );
  }

}

export default Scene3D;
