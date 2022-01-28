/**
 * Component: Information
 * Render the information of the model
 */
import Cristalograficas  from "./Propiedades/Cristalograficas";
import Fisicas from "./Propiedades/Fisicas";
import Introduccion from "./Propiedades/Introduccion";
import Quimicas from "./Propiedades/Quimicas";
import Opticas from "./Propiedades/Opticas";
import {CurrentInformationProps} from "../../Tipos";
import React from "react";

function Information(props: CurrentInformationProps): JSX.Element {
    switch (props.isVisible) {
        case "physical":
            return <Fisicas information={props.properties.physical}/>;
        case "optical":
            return <Opticas information={props.properties.optical}/>;
        case "crystallographic":
            return <Cristalograficas information={props.properties.crystallographic}/>;
        case "chemical":
            return <Quimicas information={props.properties.chemical}/>;
        case "introduction":
            return <Introduccion information={props.properties.introduction}/>
    }
    return <h1> Error proiedades </h1>;
}

/*
    Function that renders a model information abaut a model respect to model name
 */
export default Information;
