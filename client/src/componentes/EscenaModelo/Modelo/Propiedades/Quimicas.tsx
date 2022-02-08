import {ChemicalProps} from "../../../Tipos";
import React from "react";

import Card from "./Card";

function Quimicas(props: ChemicalProps): JSX.Element {
  const information = props.information;
  const propiedades: { [key: string]: string } = {
      "Peso Molecular": information.molecular_weight,
      "Elementos": information.elemental_chemistry,
      "Oxidos": information.chemistry_oxides
    };
    return (<>
      <Card diccionario={propiedades}/>
    </>);
}

export default Quimicas;

