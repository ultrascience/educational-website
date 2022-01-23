import axios from "axios";
import { useState } from "react";
import '../styles/index.css';
// import { ModelType } from "./Types";

type ModelType = {
  _id: string;
  name: string;
  image: {
    data: Buffer;
    contentType: string;
  };
  clasification: string;
  introduction: {
    etymology: string;
    atmosphere: string;
    applications: string;
    main_locations: string;
    diffractogram: string;
  };
  properties: {
    chemical: {
      chemical_formula: string;
      molecular_weight: string;
      elemental_chemistry: string;
      chemistry_oxides: string;
    },
    crystallographic:
    {
      cell_dimension: string;
      crystalline_system: string;
      x_ray_diffraction: string;
    }
    ,
    physical: {
      gloss: string;
      color: string;
      hardness: string;
      stripe: string;
      fracture: string;
      crystal_habit: string;
      diaphanous: string;
      exfoliation: string;
      density: string;
      luminescence: string;
      radioactivity: string;
    },
    optical: string;
  };
  references: string;
}

// Component that send the form data to the server and returns the response to the user in the form of a JSON object using JsonProps interface and tailwindcss and typescript
// The form data is sent to the server using axios and the response is returned to the user in the form of a JSON object 
// to the route "http://localhost:8080/api/rocks/upload"
function Forms() {
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | undefined>();
  const [clasification, setClasification] = useState("");
  const [etymology, setEtymology] = useState("");
  const [atmosphere, setAtmosphere] = useState("");
  const [applications, setApplications] = useState("");
  const [main_locations, setMainLocations] = useState("");
  const [diffractogram, setDiffractogram] = useState("");
  const [chemical_formula, setChemicalFormula] = useState("");
  const [molecular_weight, setMolecularWeight] = useState("");
  const [elemental_chemistry, setElementalChemistry] = useState("");
  const [chemistry_oxides, setChemistryOxides] = useState("");
  const [cell_dimension, setCellDimension] = useState("");
  const [crystalline_system, setCrystallineSystem] = useState("");
  const [x_ray_diffraction, setXRayDiffraction] = useState("");
  const [gloss, setGloss] = useState("");
  const [color, setColor] = useState("");
  const [hardness, setHardness] = useState("");
  const [stripe, setStripe] = useState("");
  const [fracture, setFracture] = useState("");
  const [crystal_habit, setCrystalHabit] = useState("");
  const [diaphanous, setDiaphanous] = useState("");
  const [exfoliation, setExfoliation] = useState("");
  const [density, setDensity] = useState("");
  const [luminescence, setLuminescence] = useState("");
  const [radioactivity, setRadioactivity] = useState("");
  const [optical, setOptical] = useState("");
  const [references, setReferences] = useState("");

  const onFileChange = (e: any) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log("file changed");
  };

  // Function handleChange that takes the name of the input and the value of the input and sets the value of the input to the state of the component
  // The state of the component is the value of the input 
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "clasification":
        setClasification(e.target.value);
        break;
      case "etymology":
        setEtymology(e.target.value);
        break;
      case "atmosphere":
        setAtmosphere(e.target.value);
        break;
      case "applications":
        setApplications(e.target.value);
        break;
      case "main_locations":
        setMainLocations(e.target.value);
        break;
      case "diffractogram":
        setDiffractogram(e.target.value);
        break;
      case "chemical_formula":
        setChemicalFormula(e.target.value);
        break;
      case "molecular_weight":
        setMolecularWeight(e.target.value);
        break;
      case "elemental_chemistry":
        setElementalChemistry(e.target.value);
        break;
      case "chemistry_oxides":
        setChemistryOxides(e.target.value);
        break;
      case "cell_dimension":
        setCellDimension(e.target.value);
        break;
      case "crystalline_system":
        setCrystallineSystem(e.target.value);
        break;
      case "x_ray_diffraction":
        setXRayDiffraction(e.target.value);
        break;
      case "gloss":
        setGloss(e.target.value);
        break;
      case "color":
        setColor(e.target.value);
        break;
      case "hardness":
        setHardness(e.target.value);
        break;
      case "stripe":
        setStripe(e.target.value);
        break;
      case "fracture":
        setFracture(e.target.value);
        break;
      case "crystal_habit":
        setCrystalHabit(e.target.value);
        break;
      case "diaphanous":
        setDiaphanous(e.target.value);
        break;
      case "exfoliation":
        setExfoliation(e.target.value);
        break;
      case "density":
        setDensity(e.target.value);
        break;
      case "luminescence":
        setLuminescence(e.target.value);
        break;
      case "radioactivity":
        setRadioactivity(e.target.value);
        break;
      case "optical":
        setOptical(e.target.value);
        break;
      case "references":
        setReferences(e.target.value);
        break;
      default:
        break;
    }
  }

  // function that stringifies the state of the component and sends it to the backend
  function handleSubmit(e: any) {
  e.preventDefault();
    // check is image no is undefined
    if (image === undefined) {
      alert("Please select an image");
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("clasification", clasification);
    formData.append("etymology", etymology);
    formData.append("atmosphere", atmosphere);
    formData.append("applications", applications);
    formData.append("main_locations", main_locations);
    formData.append("diffractogram", diffractogram);
    formData.append("chemical_formula", chemical_formula);
    formData.append("molecular_weight", molecular_weight);
    formData.append("elemental_chemistry", elemental_chemistry);
    formData.append("chemistry_oxides", chemistry_oxides);
    formData.append("cell_dimension", cell_dimension);
    formData.append("crystalline_system", crystalline_system);
    formData.append("x_ray_diffraction", x_ray_diffraction);
    formData.append("gloss", gloss);
    formData.append("color", color);
    formData.append("hardness", hardness);
    formData.append("stripe", stripe);
    formData.append("fracture", fracture);
    formData.append("crystal_habit", crystal_habit);
    formData.append("diaphanous", diaphanous);
    formData.append("exfoliation", exfoliation);
    formData.append("density", density);
    formData.append("luminescence", luminescence);
    formData.append("radioactivity", radioactivity);
    formData.append("optical", optical);
    formData.append("references", references);

    axios.post("http://localhost:8080/api/rocks/upload", formData, {
     headers: {
     "Content-Type": "multipart/form-data",
     },
     }).then(res => {
     console.log(res);
     console.log(res.data);
     });
     console.log("form submitted");
     console.log(name);
     console.log(image);
  }


  // Function that generate the input fields for the form 
  function generateInputs() {
    const inputs = [];

    // Create a dictionary from inputNames and the corresponding state of the component
    const inputNamesDictionary: { [key: string]: string } = {
      "name": "Nombre",
      "clasification": "Clasificación",
      "etymology": "Etimología",
      "atmosphere": "Atmósfera",
      "applications": "Aplicaciones",
      "main_locations": "Lugares principales",
      "diffractogram": "Difractograma",
      "chemical_formula": "Fórmula química",
      "molecular_weight": "Peso molecular",
      "elemental_chemistry": "Química elemental",
      "chemistry_oxides": "Oxígeno",
      "cell_dimension": "Dimensión de la celda",
      "crystalline_system": "Sistema cristalino",
      "x_ray_diffraction": "Difracción por X-ray",
      "gloss": "Gloss",
      "color": "Color",
      "hardness": "Dureza",
      "stripe": "Rayas",
      "fracture": "Fractura",
      "crystal_habit": "Hábito cristalino",
      "diaphanous": "Diáfano",
      "exfoliation": "Exfoliación",
      "density": "Densidad",
      "luminescence": "Luminosidad",
      "radioactivity": "Radioactivo",
      "optical": "Óptico",
      "references": "Referencias",

    }
    let llave: string;
    for (llave in inputNamesDictionary) {
      inputs.push(
        <div className="form-group" key={llave}>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={llave}>{inputNamesDictionary[llave]}</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={llave}
            name={llave}
            onChange={handleChange}
          />
        </div>
      );
    }
    return inputs;
  }
  // Return the form using tailwind classes
  // The form is generated using the function generateInputs()
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center">
        <div className="focus-within:border-transparent border-2 border-gray-300 rounded-lg p-4 w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
          >

            {generateInputs()}
            <div className="form-group">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image">Imagen</label>
              <input
                type="file"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                name="image"
                onChange={onFileChange}
              />
            </div>
          </form>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );


}

export default Forms;
