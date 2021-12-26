/**
 * Component that renders a button.
 * With three different styles: primary, secondary and danger.
 */
import React from "react";
import { ButtonProps } from "./Types";

function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

export default Button;
