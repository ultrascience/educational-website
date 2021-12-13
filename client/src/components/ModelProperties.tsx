import {PropertiesProps} from './Types';

function Chemical(props: PropertiesProps): JSX.Element {
    return (
        <div>
            {props.information}
        </div>
    )
}

function Optical(props: PropertiesProps): JSX.Element {
    return (
        <div>
            {props.information}
        </div>
    )
}

function Crystallographic(props: PropertiesProps): JSX.Element {
    return (
        <div>
            {props.information}
        </div>
    )
}
function Physical(props: PropertiesProps): JSX.Element {
    return (
        <div>
            {props.information}
        </div>
    )
}

/* Export the properties */
export {Chemical, Optical, Crystallographic, Physical};
