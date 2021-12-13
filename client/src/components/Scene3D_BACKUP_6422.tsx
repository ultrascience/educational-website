import Button from './Button'
import Modelo3D from "./Modelo3D";
import ModelInformation from "./ModelInformation";
import Augen from "../models3D/Augen";
import "../styles/sceneModel.css"
import "../styles/button.css"
import { useState } from "react";
import React from 'react';

<<<<<<< HEAD:sitio-web/src/components/Scene3D.tsx
type AppProps = {
    nombre: string;
    information: any;
=======
type SceneProps = {
    namemodel: string;
>>>>>>> feature/correct-props:client/src/components/Scene3D.tsx
}

const KeysToComponentMap: { [index: string]: any } = {
    "augen": Augen,
    "danburita": Augen
};

// TODO: Charge the information of the model from the database based on the name of the model (props.namemodel)

/**
 * Component: Scene3D
 * Renders a 3D scene with the model and its information.
 */
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
    let dataModel = [];
    return (
        <div className="parent">
            <div className={estilo}>
                {/* Mount the glb model (based on the KeysToComponentMap) to Modelo3D component */}
                <Modelo3D modelo={React.createElement(KeysToComponentMap[props.namemodel], null, null)} />

            </div>
            {mountInformation &&
                <div className="info">
<<<<<<< HEAD:sitio-web/src/components/Scene3D.tsx
                    <ModelInformation nombre={props.nombre} information={props.information}/>
=======
                    <ModelInformation namemodel={props.namemodel} propertiesmodel={dataModel} />
>>>>>>> feature/correct-props:client/src/components/Scene3D.tsx
                </div>
            }
            <div className="button-section">
                <Button onClick={ChangeStyleModel} children="Informacion" />
            </div>
        </div>
    );
}

export default Scene3D;
