import {OpticalProps} from "../../../Tipos";
import React from "react";

function Opticas(props: OpticalProps): JSX.Element {
    return (<>
        <div>Information: {props.information}</div>
    </>);
}
export default Opticas;