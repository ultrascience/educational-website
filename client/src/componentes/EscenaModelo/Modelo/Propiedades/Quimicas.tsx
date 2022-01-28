import {ChemicalProps} from "../../../Tipos";
import React from "react";

function Quimicas(props: ChemicalProps): JSX.Element {
    return (<>
        <div>Formula quimica: {props.information.chemical_formula}</div>
        <div>Peso molecular: {props.information.molecular_weight}</div>
        <div>Elementos: {props.information.elemental_chemistry}</div>
        <div>Oxidos: {props.information.chemistry_oxides}</div>
        <a href="https://www.flaticon.com/free-icons/rock" title="rock icons">Rock icons created by Icongeek26 -
            Flaticon</a>
    </>);
}

export default Quimicas;

