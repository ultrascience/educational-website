/**
 * Componente que sirve para renderizar el componente de la escena 3D.
 * Utilizando CSS Grid.
 */
import Button from './Button'
// import Modelo3D from "./Modelo3D";
// import Augen from "./Augen";
import "../index.css"
import ReactDOM from 'react-dom';
import React, {useState} from "react";


function Scene3D() {
    const [mountA, setMountA] = useState(false);

    function ChangeStyleModel() {
     setMountA(!mountA);
  
    }

    const estilo = mountA ? "informationOff" : "informationOn";

    return (
          <div className={estilo}>
            <h1>Escena 3D</h1>
            <Button onClick={ChangeStyleModel} children="Informacion"/>
            {mountA && <div className="informationOff cajaInformation"> <h1> Model Information</h1> </div>}
          </div>
    );
}

export default Scene3D;
