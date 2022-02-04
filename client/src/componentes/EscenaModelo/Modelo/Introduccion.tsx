import {IntroductionProps} from "../../Tipos";
import React from "react";

function Introduccion(props: IntroductionProps) {
    return (<>
        <div>Etimología: {props.information}</div>
    </>);
}
export default Introduccion;
