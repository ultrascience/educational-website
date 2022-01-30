import {ChemicalProps} from "../../../Tipos";
import React from "react";

import { CardInfo, CardTitle } from "./Card";

function Quimicas(props: ChemicalProps): JSX.Element {
    return (<>
    <CardTitle title="Químicas"/>
        <CardInfo title="Peso molecular" description={props.information.molecular_weight} />
        <CardInfo title="Elementos" description={props.information.elemental_chemistry} />
        <CardInfo title="Oxidos" description={props.information.chemistry_oxides} />
    </>);
}

export default Quimicas;

