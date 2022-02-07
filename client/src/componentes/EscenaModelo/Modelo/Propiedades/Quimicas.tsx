import {ChemicalProps} from "../../../Tipos";
import React from "react";

import { CardInfo, CardTitle } from "./Card";

function Quimicas(props: ChemicalProps): JSX.Element {
    return (<>
    <div className="flex flex-col divide-y divide-solid">
        <CardInfo title="Peso molecular" description={props.information.molecular_weight} />
        <CardInfo title="Elementos" description={props.information.elemental_chemistry} />
        <CardInfo title="Oxidos" description={props.information.chemistry_oxides} />
        </div>
    </>);
}

export default Quimicas;

