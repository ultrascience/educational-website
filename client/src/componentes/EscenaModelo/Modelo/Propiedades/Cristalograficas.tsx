import { CrystallographicProps } from "../../../Tipos";
import React from "react";
import { CardInfo, CardTitle } from "./Card";

function Cristalograficas(props: CrystallographicProps): JSX.Element {
  return (<>
    <CardTitle title="Cristalograficas"/>
        <CardInfo title="Dimension de celda" description={props.information.cell_dimension} />
        <CardInfo title="Cristalino" description={props.information.crystalline_system} />
        <CardInfo title="Difraccion rayos X" description={props.information.x_ray_diffraction} />
    </>);
}

export default Cristalograficas;
