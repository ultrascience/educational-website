import {IntroductionProps} from "../../../Tipos";
import React from "react";

function Introduccion(props: IntroductionProps) {
    return (<>
        <div>Etimología: {props.information.etymology}</div>
        <div>Atmosfera: {props.information.atmosphere}</div>
        <div>Aplicaciones: {props.information.applications}</div>
        <div>Localidades: {props.information.main_locations}</div>
        <div>Difractograma: {props.information.diffractogram}</div>
    </>);
}
export default Introduccion;