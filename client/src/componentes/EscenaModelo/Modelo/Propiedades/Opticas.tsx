import {OpticalProps} from "../../../Tipos";
import React from "react";
import Card from "./Card";

function Opticas(props: OpticalProps): JSX.Element {
  const information = props.information;
  const propiedades: { [key: string]: string } = {
    "Optica": information
  }
    return (<>
        <Card diccionario={propiedades}/>
    </>);
}
export default Opticas;
