/* eslint-disable tailwindcss/no-custom-classname */
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
    const formula = "CaB_{2}(SiO_{4})_{2}";
    return (
      <div className="w-fit">
        <div className="text-2xl font-semibold text-center capitalize">
          {currentModel.name}
        </div>
        <div className="text-xl font-medium text-center ">
          <MathJaxContext>
            <MathJax>{"\\(" + formula + "\\)"}</MathJax>
          </MathJaxContext>
        </div>
      </div>
    );
  }

  function Summary(props: { idModelSelected: string }): JSX.Element {
    return (
      <div className="w-fit h-96">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          <div className="col-span-1 row-span-full">
            <Model3D idModelSelected={props.idModelSelected} type="modelo3D" />
          </div>
          <div className="col-span-2 row-span-full">
            <Model3D idModelSelected={props.idModelSelected} type="chemical_formula" />
          </div>
        </div>
      </div>
    );
  }

  function Properties(props: { idModelSelected: string }): JSX.Element {
    return (
      <div className="w-fit h-fit">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full">
          <div className="col-span-1 row-span-full">
            <div className="flex flex-col flex-wrap gap-2 w-full h-full p-4">
              <Fisicas information={currentModel.properties.physical} />
              <Quimicas information={currentModel.properties.chemical} />
              <Cristalograficas information={currentModel.properties.crystallographic} />
              <Opticas information={currentModel.properties.optical} />
            </div>
          </div>
          <div className="col-span-2 row-span-full shadow-xl rounded-lg p-4">
          <div className="text-xl font-bold capitalize">
            Resumen:
          </div>
            <p>
              Danburita es un mineral de silicato de calcio y boro, su fórmula química es CaB2(SiO4)2.
              Tiene una dureza de Mohs de 7 a 7.5 y una gravedad específica de 3.0. El mineral tiene una forma de cristal ortorrómbica. Es generalmente incoloro, como el cuarzo, pero también puede ser de color amarillo pálido o marrón amarillento. Por lo general se produce en contacto con las rocas metamórficas.
              La clasificación de minerales Dana, clasifica al danburita como un sorosilicato, mientras que el esquema de clasificación de Strunz lo clasifica como un tectosilicato su estructura puede ser interpretada como cualquiera.
              Su simetría cristalina y la forma son similares al topacio; sin embargo, el topacio es de calcio y flúor teniendo nesosilicato. La claridad, la capacidad de resistencia, y la fuerte dispersión de la danburita hacen que sea valioso para la joyería.
              El nombre proviene de la ciudad de Danbury, Connecticut, Estados Unidos, donde fue descubierto por primera vez en 1839 por Charles Upham Shephard.2
            </p>
          </div>
        </div>
      </div>
    );
  }

  function Footer(): JSX.Element {
    return (
      <div className="w-fit bg-blue-500">
        <div className="text-center">
          Fuentes de Consulta: {currentModel.references}
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
        <div className="min-h-screen min-w-screen bg-gray-100">
          <div className="space-y-2 space-x-2 scena shadow-2xl">
            <Header />
            <Summary idModelSelected={id} />
            <Properties idModelSelected={id} />
            <Footer />
          </div>
        </div>
      );
    }
  }

}

export default Escena;
