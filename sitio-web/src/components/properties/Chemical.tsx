type AppProps = {
    information: string;
}
function Chemical(props: AppProps): JSX.Element {
    return (
        <div>
            {props.information}
        </div>
    )
}
export default Chemical;
