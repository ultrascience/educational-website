type AppProps = {
    information: string;
}
function Crystallographic(props: AppProps): JSX.Element {

    return (
        <div>
            {props.information}
        </div>
    );
}

export default Crystallographic;
