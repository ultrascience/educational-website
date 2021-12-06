/** 
 * Component: ModelInformation
 * Render the information of the model 
 */
import { JSXElementConstructor, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/modelInformation.css'


type AppProps = {
    information: string;
}
/* pasa un json con la informacion del modelo */
type ModelInformationProps = {
    nombre: string;
    information: string;
}

type CurrentInformationProps = {
    nombre: string;
    information: string;
}

function Chemical(props: AppProps): JSX.Element {
    return (
        <div>
            {props.information}
        </div>
    )
}

function Optical(props: AppProps): JSX.Element {
    return (
        <div>
            {props.information}
        </div>
    )
}

function Crystallographic(props: AppProps): JSX.Element {
    return (
        <div>
            {props.information}
        </div>
    )
}
function Physical(props: AppProps): JSX.Element {
    return (
        <div>
            {props.information}
        </div>
    )
}

function CurrentInformation(props: CurrentInformationProps): JSX.Element {
    if (props.information === 'physical') {
        return <Physical information="Fisicas" />;
    }
    if (props.information === 'optical') {
        return <Optical information="Opticas" />;
    }
    if (props.information === 'crystallographic') {
        return <Crystallographic information="Cristalograficas" />;
    }
    if (props.information === 'chemical') {
        return <Chemical information="Quimicas" />;
    }
    return <h1> H </h1>;
}

function ModelInformation(props: ModelInformationProps): JSX.Element {
    const [visible, setVisible] = useState("physical");

    return (
        <>
            <div className="flex gap-2">
                <button className="flex-1 bg-red-200" onClick={() => setVisible("physical")}>Fisicas</button>
                <button className="flex-1 bg-red-200" onClick={() => setVisible("chemical")}>Quimicas</button>
                <button className="flex-1 bg-red-200" onClick={() => setVisible("optical")}>Opticas</button>
                <button className="flex-1 bg-red-200" onClick={() => setVisible("crystallographic")}>Cristalograficas</button>
            </div>
            {<CurrentInformation nombre={visible} information={props.information} />}
        </>
    )
}
/*
    Function that renders a model information abaut a model respect to model name
 */
export default ModelInformation;
