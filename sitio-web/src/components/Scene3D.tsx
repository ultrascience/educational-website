/**
 * Component: Scene3D
 * Renders a 3D scene with model and its information.
 */
import Button from './Button'
import Modelo3D from "./Modelo3D";
import ModelInformation from "./ModelInformation";
import Augen from "../models3D/Augen";
import "../styles/sceneModel.css"
import "../styles/button.css"
import { useState } from "react";
import React from 'react';

type SceneProps = {
    namemodel: string;
    information: any [];
}

const KeysToComponentMap: { [index: string]: any } = {
    "augen": Augen,
    "danburita": Augen
};

function Scene3D(props: SceneProps) {
    const [mountInformation, setMountInformation] = useState(false);

    /**
     * Function: ChangeStyleModel
     * Changes the style to show or hide the information of the model.
     */
    function ChangeStyleModel() {
        setMountInformation(!mountInformation);

    }

    const estilo = mountInformation ? "infoOn" : "infoOff";

    return (
        /* Transicion utilizando React-Transition-Group para el componente ModelInformation*/
        <div className="parent">
            <div className={estilo}>

                <Modelo3D modelo={React.createElement(KeysToComponentMap[props.namemodel], null, null)} />

            </div>
            {mountInformation &&
                <div className="info">
                    <ModelInformation namemodel={props.namemodel} information={props.information} />
                </div>
            }
            <div className="button-section">
                <Button onClick={ChangeStyleModel} children="Informacion" />
            </div>
        </div>
    );
}

export default Scene3D;
