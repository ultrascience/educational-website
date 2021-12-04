type AppProps = {
    information: string;
}
function Physical(props: AppProps): JSX.Element {
    return (
        <div>
            {props.information}
        </div>
    )
}
export default Physical;