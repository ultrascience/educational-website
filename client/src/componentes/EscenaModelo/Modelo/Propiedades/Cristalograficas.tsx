import { CrystallographicProps } from "../../../Tipos";
import React from "react";
import Card from "./Card";

function Cristalograficas(props: CrystallographicProps): JSX.Element {
  const information = props.information
  const propiedades: { [key:string]: string } = {
    "Dimencion de celda": information.cell_dimension,
    "Cristalino": information.crystalline_system,
    "Difraccion de rayos X": information.x_ray_diffraction,
  }
  return (<>
    <Card diccionario={propiedades} titulo="Cristalograficas" />
  </>);
}

export default Cristalograficas;
