/**
 * Component that renders a button.
 * With three different estilos: primary, secondary and danger.
 */
import React from "react";
import {ButtonProps} from "./Tipos";
import "../estilos/index.css";

function Button(props: ButtonProps): JSX.Element {
    // return type button depend on props.type
    switch (props.type) {
        case "icon":
            return <button className="btn-icon" onClick={props.onClick}><img src={props.icon} className="w-6 h-6"
                                                                             alt="icon"/></button>;
        case "submit":
            return <button className="btn-submit" onClick={props.onClick}>{props.text}</button>;
        default:
            return <button className="btn">{props.children}</button>;
    }

}

export default Button;
