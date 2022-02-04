import {PhysicalProps} from "../../../Tipos";
import React from "react";
import './../../../../estilos/index.css';
import { CardInfo, CardTitle } from "./Card";

function Fisicas(props: PhysicalProps): JSX.Element {
    return (<>

    <div className="flex flex-col divide-y divide-solid">
        <CardInfo title="Lustre" description={props.information.gloss}/>
        <CardInfo title="Color" description={props.information.color}/>
        <CardInfo title="Dureza" description={props.information.hardness}/>
        <CardInfo title="Ray" description={props.information.stripe}/>
        <CardInfo title="Fractura" description={props.information.fracture}/>
        <CardInfo title="Cristal" description={props.information.crystal_habit}/>
        <CardInfo title="Diafanidad" description={props.information.diaphanous}/>
        <CardInfo title="Exfoliacion" description={props.information.exfoliation}/>
        <CardInfo title="Densidad" description={props.information.density}/>
        <CardInfo title="Luminiscencia"description={props.information.luminescence}/>
        <CardInfo title="Radioactividad" description={props.information.radioactivity}/>
        </div>
    </>);
}
export default Fisicas;

