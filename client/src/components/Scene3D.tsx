import Button from './Button'
import Model3D from "./Model3D";
import ModelInformation from "./ModelInformation";
import Augen from "../models3D/Augen";
import "../styles/sceneModel.css"
import "../styles/button.css"
import { useState } from "react";
import React from 'react';
import { SceneProps } from "./Types";


const KeysToComponentMap: { [index: string]: any } = {
    "augen": Augen,
    "danburita": Augen
};


/**
 * Component: Scene3D
 * Renders a 3D scene with the model and its information.
 */
function Scene3D(props: SceneProps): JSX.Element {
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
        <div className="parent">
            <div className={estilo}>
                {/* Mount the glb model (based on the KeysToComponentMap) to Model3D component */}
                <Model3D modelo={React.createElement(KeysToComponentMap[props.namemodel], null, null)} />

            </div>
            {mountInformation &&
                <div className="info">
                    <ModelInformation namemodel={props.namemodel} information={["a","b"]} />
                </div>
            }
            <div className="button-section">
                <Button onClick={ChangeStyleModel} children="Informacion" />
            </div>
        </div>
    );
}

export default Scene3D;
