import {PhysicalProps} from "../../../Tipos";
import React from "react";
import './../../../../estilos/index.css';
import Card from "./Card";

function Fisicas(props: PhysicalProps): JSX.Element {
  const information = props.information;
  const propiedades: {[key: string]: string} = {
    "Lustre": information.gloss,
    "Color": information.color,
    "Dureza": information.hardness,
    "Raya": information.stripe, 
    "Fractura": information.fracture,
    "Cristal": information.crystal_habit,
    "Diafanidad": information.diaphanous,
    "Exfoliacion": information.exfoliation,
    "Densidad": information.density,
    "Luminiscencia": information.luminescence,
    "Radioactividad": information.radioactivity
  }
    return (<>
      <Card diccionario={propiedades} titulo="Fisicas"/>
    </>);
}
export default Fisicas;

