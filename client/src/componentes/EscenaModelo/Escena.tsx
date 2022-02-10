import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../estilos/index.css";
import { Modelo3DProps, ModelType, SceneProps } from "../Tipos";
import Introduccion from "./Modelo/Introduccion";
import Model3D from "./Modelo/Modelo3D";
import Cristalograficas from "./Modelo/Propiedades/Cristalograficas";
import Fisicas from "./Modelo/Propiedades/Fisicas";
import Opticas from "./Modelo/Propiedades/Opticas";
import Quimicas from "./Modelo/Propiedades/Quimicas";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useParams } from "react-router-dom";

/**
 * Componente: Escena
 * Renderiza una escena con un modelo 3D y un panel de información
 * @param props: SceneProps
 * @returns JSX.Element
 */
function Escena(): JSX.Element {
  const [currentModel, setCurrentModel] = useState<ModelType>({} as ModelType);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { id } = useParams();

  /* Asigna currentModel con el modelo proporcionado el servidor en http://localhost:3000/api/rocks/get-rock/:id
  * y lo guarda en el estado currentModel.
  */
  useEffect(() => {
    axios.get(`http://localhost:8080/api/rocks/get-rock/${id}`)
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

  function Header(): JSX.Element {
    const formula = "H_{2}O";
    return (
      <div className="w-fit bg-red-300">
        <div className="text-lg font-semibold text-center capitalize">
          {currentModel.name}

          <MathJaxContext>
            <MathJax>{"\\(" + formula + "\\)"}</MathJax>
          </MathJaxContext>
        </div>
      </div>
    );
  }

  function Summaru(props: Modelo3DProps): JSX.Element {
    return (
      <div className="w-fit h-4/6 bg-red-500">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          <div className="col-span-1 row-span-full bg-green-300">
            <Model3D idModelSelected={props.idModelSelected} endpoint="get-model3D/" />
          </div>
          <div className="col-span-1 row-span-full bg-blue-300">
            <Introduccion information={currentModel.introduction} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    );
  }

  function Properties(props: Modelo3DProps): JSX.Element {
    return (
      <div className="w-fit h-auto bg-red-500">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full">
          <div className="col-span-1 row-span-full bg-red-500">
            <div className="flex flex-col flex-wrap gap-2 w-full h-full">
              <Fisicas information={currentModel.properties.physical} />
              <Quimicas information={currentModel.properties.chemical} />
              <Cristalograficas information={currentModel.properties.crystallographic} />
              <Opticas information={currentModel.properties.optical} />
            </div>
          </div>
          <div className="col-span-2 row-span-full bg-green-300">
            <Model3D idModelSelected={props.idModelSelected} endpoint="get-chemical-formula/" />
          </div>
        </div>
      </div>
    );
  }

  function Footer(): JSX.Element {
    return (
      <div className="w-fit bg-blue-500">
        <div className="text-center">
          Referencias: {currentModel.references}
        </div>
      </div>
    );
  }


  if (error) {
    return <div>Error loading the model</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    if (id === undefined) {
      return <div>Error loading the model</div>;
    } else {
      return (
        <div className="container mx-auto space-y-4 space-x-4 w-fit h-fit bg-red-500">
          <Header />
          <Summaru idModelSelected={id} endpoint="get-model3D/" />
          <Properties idModelSelected={id} endpoint="get-chemical-formula/" />
          <Footer />
        </div>
      );
    }
  }

}

export default Escena;
