/**
 * Component: ModelInformation
 * Render the information of the model
 */
import "../styles/modelInformation.css";
import {
    Chemical,
    Crystallographic, Introduction, Optical, Physical
} from "./ModelProperties";
import { CurrentInformationProps } from "./Types";

function ModelInformation(props: CurrentInformationProps): JSX.Element {
  switch (props.isVisible) {
    case "physical":
      return <Physical information={props.properties.physical} />;
    case "optical":
      return <Optical information={props.properties.optical} />;
    case "crystallographic":
      return <Crystallographic information={props.properties.crystallographic} />;
    case "chemical":
      return <Chemical information={props.properties.chemical} />;
    case "introduction":
      return <Introduction information={props.properties.introduction} />
  }
  return <h1> Error proiedades </h1>;
}

/*
    Function that renders a model information abaut a model respect to model name
 */
export default ModelInformation;
