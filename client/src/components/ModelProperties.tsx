import { PhysicalProps,
ChemicalProps,
OpticalProps,
CrystallographicProps} from './Types';


function Chemical(props: ChemicalProps): JSX.Element {
  return <div>{props.information}</div>;
}

function Optical(props: OpticalProps): JSX.Element {
  return <div>{props.information}</div>;
}

function Crystallographic(props: CrystallographicProps): JSX.Element {
  return <div>{props.information}</div>;
}
function Physical(props: PhysicalProps): JSX.Element {
  return <div>{props.information}</div>;
}

/* Export the properties */
export { Chemical, Optical, Crystallographic, Physical };
