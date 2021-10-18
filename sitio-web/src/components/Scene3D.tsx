/**
 * Componente que sirve para modelar la Escena del modelo 3D y las caja de botones
 * Utilizando CSS Grid.
 */
import Button from './Button'
import Modelo3D from "./Modelo3D";
import Augen from "./Augen";
import "../index.css"
import ReactDOM from 'react-dom';
import React from "react";


function showInformation(){
 const container = document.getElementById("container");
 const element = React.createElement('div',{className: 'containerInformation'},'Hola');
 ReactDOM.render(element,container);
}

function Scene3D() {
 return (
  <div className="grid-scene">
  <div id="container" className="grid-model">
   <Modelo3D modelo={<Augen />} />
  </div>
  <div className="grid-buttons">
  <div className="flex gap-8">
      {/*<Button title="Propiedades fisicas"/>*/}
      {/*<Button title="Propiedades quimicas"/>*/}
      {/*<Button title="Propiedades biologicas"/>*/}
      {/*<Button title="Propiedades Cristalograficas"/>*/}
      {/*<Button title="Propiedades Opticas"/>*/}
   <Button
       onClick={showInformation}
       children = "Informacion"
   />
  </div>
  </div>
  </div>
 ); 
}
export default Scene3D;
