import { CrystallographicProps } from "../../../Tipos";
import React from "react";
import { CardInfo, CardTitle } from "./Card";

function Cristalograficas(props: CrystallographicProps): JSX.Element {
  return (<>
    <div className="flex flex-col divide-y divide-solid">
      <CardInfo title="Dimension de celda" description={props.information.cell_dimension} />
      <CardInfo title="Cristalino" description={props.information.crystalline_system} />
      <CardInfo title="Difraccion rayos X" description={props.information.x_ray_diffraction} />
    </div>
  </>);
}

export default Cristalograficas;
