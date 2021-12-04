type AppProps = {
    information: string;
}
function Optical(props: AppProps): JSX.Element {
    return (
        <div>
            {props.information}
        </div>
    )
}
export default Optical;
