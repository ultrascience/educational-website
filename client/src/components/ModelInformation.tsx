/**
 * Component: ModelInformation
 * Render the information of the model
 */
import { JSXElementConstructor, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/modelInformation.css";
import { CurrentInformationProps, ModelInfoProps, ModelType } from "./Types";
import {
  Physical,
  Chemical,
  Crystallographic,
  Optical,
} from "./ModelProperties";

function CurrentInformation(props: CurrentInformationProps): JSX.Element {
  switch (props.isVisible) {
    case "physical":
      return <Physical information={props.properties.physical} />;
    case "optical":
      return <Optical information={props.properties.optical} />;
    case "crystallographic":
      return <Crystallographic information={props.properties.crystallographic} />;
    case "chemical":
      return <Chemical information={props.properties.chemical} />;
  }
  return <h1> Error proiedades </h1>;
}

function ModelInformation(props: ModelInfoProps): JSX.Element {
  const [visible, setVisible] = useState("physical");

  return (
    <>
      <div className="flex gap-2">
        <button
          className="flex-1 bg-red-200"
          onClick={() => setVisible("physical")}
        >
          Fisicas
        </button>
        <button
          className="flex-1 bg-red-200"
          onClick={() => setVisible("chemical")}
        >
          Quimicas
        </button>
        <button
          className="flex-1 bg-red-200"
          onClick={() => setVisible("optical")}
        >
          Opticas
        </button>
        <button
          className="flex-1 bg-red-200"
          onClick={() => setVisible("crystallographic")}
        >
          Cristalograficas
        </button>
      </div>
      {
        <CurrentInformation
          isVisible={visible}
          properties={props.properties}
        />
      }
    </>
  );
}
/*
    Function that renders a model information abaut a model respect to model name
 */
export default ModelInformation;
