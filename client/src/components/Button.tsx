/**
 * Component that renders a button.
 * With three different styles: primary, secondary and danger.
 */
import React from "react";

interface Props {
    children?: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<Props> = ({
                                     children,
                                     onClick
                                 }) => {
    return (
        <button
            onClick={onClick}
            className="btn"
        >
            {children}
        </button>
    );
}

export default Button;
