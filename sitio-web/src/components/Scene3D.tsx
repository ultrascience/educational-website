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
import {useState} from "react";

function Scene3D() {
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
                <h1>Modelo 3D</h1>
                </div>
                {mountInformation && 
                  <div className="info">
                    <ModelInformation/>
                  </div>
                }
                <div className="button-section">
                <Button onClick={ChangeStyleModel} children="Informacion"/>
                </div>
        </div>
    );
}

export default Scene3D;
