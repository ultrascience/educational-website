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

  /**
     * Function: ChangeStyleModel
     * Changes the style to show or hide the information of the model.
     */
  function ChangeStyleModel() {
    setMountInformation(!mountInformation);
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


  if (error) {
    return <div>Error loading the model</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const estilo = mountInformation ? "infoOn" : "infoOff";
    return (
      <>
 <div className="parent">
      <div className={estilo}>
        {/* Mount the glb model (based on the KeysToComponentMap) to Model3D component */}
        <Model3D
          modelo={React.createElement(
            KeysToComponentMap[currentModel.name],
            null,
            null
          )}
        />
      </div>
      {mountInformation && (
        <div className="info">
          <ModelInformation
            namemodel={currentModel.name}
            information={["a", "b"]}
          />
        </div>
      )}
      <div className="button-section">
        <Button onClick={ChangeStyleModel} children="Informacion" />
      </div>
    </div>
      </>
    );
  }

}

export default Scene3D;
