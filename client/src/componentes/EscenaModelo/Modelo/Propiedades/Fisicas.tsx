import {PhysicalProps} from "../../../Tipos";
import React from "react";
import './../../../../estilos/index.css';

/* Component card with title and description
 * @param {string} title - Title of the card
 * @param {string} description - Description of the card
 * using tailwindcss
 * */
function Card(props: {title: string, description: string}) {
    return (
    <>
            <div className="grow col-auto row-auto p-1 m-2 bg-white rounded-md divide-y divide-solid shadow-2xl">
            <div className="text-base font-bold text-center text-gray-700">
                {props.title}
            </div>
            <div className="p-1 text-xs text-center text-gray-700">
                <p className="subpixel-antialiased">{props.description}</p>
            </div>
            </div>
            </>
    );
}

function Fisicas(props: PhysicalProps): JSX.Element {
    return (<>
    <div className="mt-6 text-center">
        <h1 className="text-2xl font-bold text-gray-700">Propiedades físicas</h1>
    </div>
    <div className="grid grid-cols-2 gap-1 m-8 ">
        <Card title="Lustre" description={props.information.gloss}/>
        <Card title="Color" description={props.information.color}/>
        <Card title="Dureza" description={props.information.hardness}/>
        <Card title="Ray" description={props.information.stripe}/>
        <Card title="Fractura" description={props.information.fracture}/>
        <Card title="Cristal" description={props.information.crystal_habit}/>
        <Card title="Diaphanous" description={props.information.diaphanous}/>
        <Card title="Exfoliation" description={props.information.exfoliation}/>
        <Card title="Densidad" description={props.information.density}/>
        <Card title="Luminescence"description={props.information.luminescence}/>
        <Card title="Radioactivity" description={props.information.radioactivity}/>
        </div>
    </>);
}
export default Fisicas;

