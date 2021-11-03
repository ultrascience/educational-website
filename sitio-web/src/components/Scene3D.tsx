/**
 * Componente que sirve para modelar la Escena del modelo 3D y las caja de botones
 * Utilizando CSS Grid.
 */
import Button from './Button'
import Modelo3D from "./Modelo3D";
import Augen from "./Augen";
import "../index.css"
import ReactDOM from 'react-dom';
import React, {useState} from "react";


function Scene3D() {
    const [mountA, setMountA] = useState(false);

    function ChangeStyleModel() {
     setMountA(!mountA);
  
    }

    const estilo = mountA ? "mitad" : "entero";

    return (
        <div className="grid-scene">
            <div id="container" className="grid-model">
                <div className={estilo}>
                <Modelo3D modelo={<Augen/>}/>
                </div>
                {mountA &&
                    <div className="information">
                     <h1> Hola Mundo </h1>
                    </div>
                }
            </div>
            <div className="grid-buttons">
                <div className="flex gap-8">
                    <Button
                        onClick={ChangeStyleModel}
                        children="Informacion"
                    />
                </div>
            </div>
        </div>
    );
}

export default Scene3D;
