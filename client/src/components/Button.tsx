/**
 * Component that renders a button.
 * With three different styles: primary, secondary and danger.
 */
import React from "react";
import { ButtonProps } from "./Types";
import "../styles/index.css";

function Button(props: ButtonProps): JSX.Element {
  // return type button depend on props.type
  switch (props.type) {
    case "icon":
      return <button className="btn-icon" onClick={props.onClick} > <img src={props.icon} className="h-6 w-6" alt="icon" /> </button>;
    case "submit":
      return <button className="submit-button">{props.children}</button>;
    default:
      return <button className="button">{props.children}</button>;
  }

}

export default Button;
