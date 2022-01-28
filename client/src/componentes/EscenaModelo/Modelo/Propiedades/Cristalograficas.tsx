import {CrystallographicProps} from "../../../Tipos";
import React from "react";

function Cristalograficas(props: CrystallographicProps): JSX.Element {
    return (<>
        <div>Dimension de celda: {props.information.cell_dimension}</div>
        <div>Cristalino: {props.information.crystalline_system}</div>
        <div>Difraccion rayos X: {props.information.x_ray_diffraction}</div>
    </>);
}

export default Cristalograficas;