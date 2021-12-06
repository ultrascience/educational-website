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

type AppProps = {
    nombre: string;
}
const KeysToComponentMap: { [index: string]: any } = {
    "augen": Augen,
    "danburita": Augen
};

function Scene3D(props: AppProps) {
    const [mountInformation, setMountInformation] = useState(false);
    const [inProp, setInProp] = useState(false);

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

                <Modelo3D modelo={React.createElement(KeysToComponentMap[props.nombre], null, null)} />

            </div>
            {mountInformation &&
                <div className="info">
                    <ModelInformation nombre={props.nombre} information="Information of the rock"/>
                </div>
            }
            <div className="button-section">
                <Button onClick={ChangeStyleModel} children="Informacion" />
            </div>
        </div>
    );
}

export default Scene3D;
