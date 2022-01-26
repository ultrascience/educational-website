import {
  PhysicalProps,
  ChemicalProps,
  OpticalProps,
  CrystallographicProps,
  IntroductionProps
} from './Types';

function Chemical(props: ChemicalProps): JSX.Element {
  return (
    <>
      <div>{props.information.chemical_formula}</div>
      <div>{props.information.molecular_weight}</div>
      <div>{props.information.elemental_chemistry}</div>
      <div>{props.information.chemistry_oxides}</div>
      <a href="https://www.flaticon.com/free-icons/rock" title="rock icons">Rock icons created by Icongeek26 - Flaticon</a>
    </>
  );
}

function Optical(props: OpticalProps): JSX.Element {
  return (
    <>
      <div>{props.information}</div>
    </>
  );
}

function Crystallographic(props: CrystallographicProps): JSX.Element {
  return (
    <>
      <div>{props.information.cell_dimension}</div>
      <div>{props.information.crystalline_system}</div>
      <div>{props.information.x_ray_diffraction}</div>
    </>
  );
}
function Physical(props: PhysicalProps): JSX.Element {
  return (
    <>
      <div>{props.information.gloss}</div>
      <div>{props.information.color}</div>
      <div>{props.information.hardness}</div>
      <div>{props.information.stripe}</div>
      <div>{props.information.fracture}</div>
      <div>{props.information.crystal_habit}</div>
      <div>{props.information.diaphanous}</div>
      <div>{props.information.exfoliation}</div>
      <div>{props.information.density}</div>
      <div>{props.information.luminescence}</div>
      <div>{props.information.radioactivity}</div>
    </>
  );
}

function Introduction(props: IntroductionProps) {
  return (
    <>
      <div>{props.information.etymology}</div>
      <div>{props.information.atmosphere}</div>
      <div>{props.information.applications}</div>
      <div>{props.information.main_locations}</div>
      <div>{props.information.diffractogram}</div>
    </>
  );
}

/* Export the properties */
export { Chemical, Optical, Crystallographic, Physical, Introduction };
