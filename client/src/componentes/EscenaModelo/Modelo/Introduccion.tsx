import { IntroductionProps } from "../../Tipos";
import React from "react";

function Introduccion(props: IntroductionProps) {
  return (<>
      <div className="space-y-2 space-x-2 rounded">
        <div className={`bg-emerald-500 text-white p-2 my-2 text-xl font-bold text-center rounded`}>
        Introducción
      </div>
      {props.information}
    </div>
  </>);
}
export default Introduccion;
