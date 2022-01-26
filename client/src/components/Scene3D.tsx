import axios from "axios";
import React, { useEffect, useState } from "react";
import { animated, useTransition } from 'react-spring';
import Augen from "../models3D/Augen";
import "../styles/index.css";
import "../styles/sceneModel.css";
import Model3D from "./Model3D";
import ModelInformation from "./ModelInformation";
import { BarIconsProps, ModelType, SceneProps } from "./Types";
import Button from "./Button";

const KeysToComponentMap: { [index: string]: any } = {
  augen: Augen,
  danburita: Augen,
};

/**
 * Component: Scene3D
 * Renders a 3D scene with the model and its information.
 */
function Scene3D(props: SceneProps): JSX.Element {
  const [currentModel, setCurrentModel] = useState<ModelType>({} as ModelType);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [mountInformation, setMountInformation] = useState(false);
  const [visible, setVisible] = useState("");
  const [modelBoxStyle, setModelBoxStyle] = useState(
    "relative row-span-full col-span-full bg-pink-500"
  );

  /**
     * Function: ChangeStyleModel
     * Changes the style to show or hide the information of the model.
     */
  function ChangeStyleModel(key: string): void {
    if (visible === key) {
      setVisible("");
      setModelBoxStyle("relative row-span-full col-span-full bg-pink-500");
      setMountInformation(false);
    } else {
      setVisible(key);
      setModelBoxStyle("relative row-span-full col-span-2 bg-pink-500");
      setMountInformation(true);
    }
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

  // function that return a button icon 
  function ButtonIcon(props: {
    icon: string,
    onClick: () => void
  }): JSX.Element {
    return (
      <Button
        type="icon"
        icon={props.icon}
        onClick={props.onClick}
      />
    );
  }

  /**
   * Component: BarIcons
   * Return icons to visualize the information of the model
   *
   */
  function BarIcons(props: BarIconsProps): JSX.Element {
    const icons: { [key: string]: string } = {
      "physical": "https://cdn-icons-png.flaticon.com/512/4405/4405457.png",
      "optical": "https://cdn-icons-png.flaticon.com/512/3953/3953422.png",
      "crystallographic": "https://cdn-icons.flaticon.com/png/512/3499/premium/3499347.png?token=exp=1643160441~hmac=f7e41f347bbc1b03b72458bf855901f3",
      "chemical": "https://cdn-icons-png.flaticon.com/512/1156/1156950.png",
      "introduction": "https://cdn-icons-png.flaticon.com/512/1030/1030902.png"
    };

    return (
      // return a bar icons with tailwind css classes
      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
        {Object.keys(icons).map((key) => (
          <ButtonIcon
            key={key}
            icon={icons[key]}
            onClick={() => ChangeStyleModel(key)}
          />
        ))}
      </div>
    );
  }

  function ModelBox(): JSX.Element {
    return (

      <div className={modelBoxStyle}>
        {/* Mount the glb model (based on the KeysToComponentMap) to Model3D component */}
        <div className="absolute m-auto left-0 right-0 bottom-4 text-center">
          <BarIcons
            setVisible={setVisible}
          />
        </div>
      </div>

    );
  }

  function ModelInformationBox(): JSX.Element {

    const transition = useTransition(mountInformation, {
      // bounce effect
      from:  { opacity: 0, transform: 'translate3d(0, -20px, -20px)' },
      enter: { opacity: 1, transform: 'translate3d(0, 0px, 0px)' },
      leave: { opacity: 0, transform: 'translate3d(0, -20px,-20px)' },
      delay: 300,
      config: { mass: 1, tension: 500, friction: 30 },
    });

    return (
    <div className="bg-red-500">
      { transition((style, item) =>
    item ?
      <animated.div style={style}>
        <ModelInformation
          properties={currentModel.properties}
          isVisible={visible}
        />
      </animated.div>
      : null
  ) }
    </div>

    );
  }

function GridScene(): JSX.Element {
  return (
    <div className="container mx-auto h-screen w-screen">
      <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2 bg-green-500 h-full w-full">
        <ModelBox />
        {visible != "" &&
          <ModelInformationBox />
        }
      </div>
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
