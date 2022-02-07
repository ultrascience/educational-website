import {OpticalProps} from "../../../Tipos";
import React from "react";
import { CardInfo, CardTitle } from "./Card";

function Opticas(props: OpticalProps): JSX.Element {
    return (<>
        <CardInfo title="Informacion" description={props.information} />
    </>);
}
export default Opticas;
