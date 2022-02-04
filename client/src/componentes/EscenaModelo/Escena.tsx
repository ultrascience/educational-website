import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../estilos/index.css";
import { ModelType, SceneProps } from "../Tipos";
import Introduccion from "./Modelo/Introduccion";
import Model3D from "./Modelo/Modelo3D";

/**
 * Componente: Escena
 * Renderiza una escena con un modelo 3D y un panel de información
 * @param props: SceneProps
 * @returns JSX.Element
 */
function Escena(props: SceneProps): JSX.Element {
  const [currentModel, setCurrentModel] = useState<ModelType>({} as ModelType);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  /* Asigna currentModel con el modelo proporcionado el servidor en http://localhost:3000/api/rocks/get-rock/:id
  * y lo guarda en el estado currentModel.
  */
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


  if (error) {
    return <div>Error loading the model</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (<>
      <div className="scene-container">
        <div className="scene-header">
          <div className="text-lg font-semibold text-center capitalize">
            {currentModel.name}
          </div>
        </div>
        <div className="scene-summary">
          <div className="scene-flex-model">
            <div className="scene-model">
              <Model3D idModelSelected={props.idModelSelected}  endpoint="get-chemical-formula/" />
            </div>
            <div className="scene-info">
              <Introduccion information={currentModel.introduction} />
            </div>
          </div>
        </div>
        <div className="scene-properties">
          <div className="scene-flex-model">
            <div className="scene-model">
              Properties
            </div>
            <div className="scene-info">
              <Model3D idModelSelected={props.idModelSelected} endpoint="get-model3D/" />
            </div>
          </div>
        </div>
        <div className="scene-footer">
        Referencias: {currentModel.references}
        </div>
      </div>

    </>);
  }

}

export default Escena;
