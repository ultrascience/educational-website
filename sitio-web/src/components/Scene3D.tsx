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
        <div className="contenedor">
                <div className={estilo}>
                <Modelo3D modelo={<Augen/>}/>
                </div>
                <Button onClick={ChangeStyleModel} children="Hola"/>
        </div>
    );
}

export default Scene3D;
