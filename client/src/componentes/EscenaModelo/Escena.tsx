import axios from "axios";
import React, { useEffect, useState } from "react";
import { animated, useTransition } from 'react-spring';
import Augen from "../../modelosJS/Augen";
import "../../estilos/index.css";
import Model3D from "./Modelo/Modelo3D";
import Information from "./Modelo/Information";
import { ModelType, SceneProps } from "../Tipos";
import Button from "../Button";

const KeysToComponentMap: { [index: string]: any } = {
  augen: Augen, danburita: Augen,
};

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
  const [mountInformation, setMountInformation] = useState(false);
  const [visible, setVisible] = useState("");
  const [modelBoxStyle, setModelBoxStyle] = useState("full-screen");

  /**
   * Funcion: ChangeStyleModel
   * Cambia el estilo para mostrar o ocultar la información del modelo.
   * @param key: string Llave del panel de información a mostrar
   */
  function ChangeStyleModel(key: string): void {
    if (visible === key) {
      setVisible("");
      setModelBoxStyle("full-screen");
      setMountInformation(false);
    } else {
      setVisible(key);
      setModelBoxStyle("half-screen-left");
      setMountInformation(true);
    }
  }

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

  /* Componente que retorna un boton con icono
   * @param icon: string Icono a mostrar
   * @param onClick: () => void Funcion a ejecutar al hacer click sobre el boton
   */
  function ButtonIcon(props: {
    icon: string, onClick: () => void
  }): JSX.Element {
    return (<Button
      type="icon"
      icon={props.icon}
      onClick={props.onClick}
    />);
  }

  /**
   * Componente: BarIcons
   * Retorna una barra con los iconos para visualizar la información del modelo
   *
   */
  function BarIcons(): JSX.Element {
    const icons: { [key: string]: string } = {
      "physical": "https://cdn-icons-png.flaticon.com/512/4405/4405457.png",
      "optical": "https://cdn-icons-png.flaticon.com/512/3953/3953422.png",
      "crystallographic": "https://cdn-icons.flaticon.com/png/512/3499/premium/3499347.png?token=exp=1643160441~hmac=f7e41f347bbc1b03b72458bf855901f3",
      "chemical": "https://cdn-icons-png.flaticon.com/512/1156/1156950.png",
      "introduction": "https://cdn-icons-png.flaticon.com/512/1030/1030902.png"
    };

    return (<div className="flex flex-row flex-wrap gap-8 justify-center items-center">
      {Object.keys(icons).map((key) => (<ButtonIcon
        key={key}
        icon={icons[key]}
        onClick={() => ChangeStyleModel(key)}
      />))}
    </div>);
  }

  /**
   * Componente: ModelBox
   * Retorna una caja con el modelo 3D y una barra de iconos para visualizar la información del modelo
   *
   */
  function ModelBox(): JSX.Element {
    return (

      <div className={modelBoxStyle}>
        {/* Mount the glb model (based on the KeysToComponentMap) to Model3D component */}
        {/* Mount the information of the model to Information component */}
        <Model3D
          modelo={React.createElement(
            KeysToComponentMap[currentModel.name],
            null,
            null
          )}
        />
        <div className="absolute inset-x-0 bottom-4 m-auto text-center">
          <BarIcons
          />
        </div>
      </div>

    );
  }

  /**
   * Componente: InformationBox
   * Retorna una caja con la información del modelo
   * Y anima la presentación de la información utilizando react-spring
   *
   */
  function ModelInformationBox(): JSX.Element {

    const transition = useTransition(mountInformation, {
      // bounce effect
      from: { opacity: 0, transform: 'translate3d(0, -20px, -20px)' },
      enter: { opacity: 1, transform: 'translate3d(0, 0px, 0px)' },
      leave: { opacity: 0, transform: 'translate3d(0, -20px,-20px)' },
      delay: 1000,
      config: { mass: 1, tension: 500, friction: 30 },
    });

    return (<div className="half-screen-right">
      {transition((style, item) => item ? <animated.div style={style}>
        <Information
          properties={currentModel.properties}
          isVisible={visible}
        />
      </animated.div> : null)}
    </div>

    );
  }


  if (error) {
    return <div>Error loading the model</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (<>
      <div className="scene-container">
        <ModelBox />
        {visible != "" && <ModelInformationBox />}
      </div>
    </>);
  }

}

export default Escena;
