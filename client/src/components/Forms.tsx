import axios from "axios";
import { useState } from "react";
import '../styles/index.css';

type JsonProps = {
  name: string;
  image: string;
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
// to the route "http://localhost:8080/api/rocks/",
function Forms() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/rocks/", {
        name,
        image,
        clasification,
        introduction: {
          etymology,
          atmosphere,
          applications,
          main_locations,
          diffractogram,
        },
        properties: {
          chemical: {
            chemical_formula,
            molecular_weight,
            elemental_chemistry,
            chemistry_oxides,
          },
          crystallographic: {
            cell_dimension,
            crystalline_system,
            x_ray_diffraction,
          },
          physical: {
            gloss,
            color,
            hardness,
            stripe,
            fracture,
            crystal_habit,
            diaphanous,
            exfoliation,
            density,
            luminescence,
            radioactivity,
          },
          optical,
        },
        references,
      })
      .then((res) => {
        console.log("Enviado :)");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function handleChange that takes the name of the input and the value of the input and sets the value of the input to the state of the component
  // The state of the component is the value of the input 
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "image") {
      setImage(e.target.value);
    } else if (e.target.name === "clasification") {
      setClasification(e.target.value);
    } else if (e.target.name === "etymology") {
      setEtymology(e.target.value);
    } else if (e.target.name === "atmosphere") {
      setAtmosphere(e.target.value);
    } else if (e.target.name === "applications") {
      setApplications(e.target.value);
    } else if (e.target.name === "main_locations") {
      setMainLocations(e.target.value);
    } else if (e.target.name === "diffractogram") {
      setDiffractogram(e.target.value);
    } else if (e.target.name === "chemical_formula") {
      setChemicalFormula(e.target.value);
    } else if (e.target.name === "molecular_weight") {
      setMolecularWeight(e.target.value);
    } else if (e.target.name === "elemental_chemistry") {
      setElementalChemistry(e.target.value);
    } else if (e.target.name === "chemistry_oxides") {
      setChemistryOxides(e.target.value);
    } else if (e.target.name === "cell_dimension") {
      setCellDimension(e.target.value);
    } else if (e.target.name === "crystalline_system") {
      setCrystallineSystem(e.target.value);
    } else if (e.target.name === "x_ray_diffraction") {
      setXRayDiffraction(e.target.value);
    } else if (e.target.name === "gloss") {
      setGloss(e.target.value);
    } else if (e.target.name === "color") {
      setColor(e.target.value);
    } else if (e.target.name === "hardness") {
      setHardness(e.target.value);
    } else if (e.target.name === "stripe") {
      setStripe(e.target.value);
    } else if (e.target.name === "fracture") {
      setFracture(e.target.value);
    } else if (e.target.name === "crystal_habit") {
      setCrystalHabit(e.target.value);
    } else if (e.target.name === "diaphanous") {
      setDiaphanous(e.target.value);
    } else if (e.target.name === "exfoliation") {
      setExfoliation(e.target.value);
    } else if (e.target.name === "density") {
      setDensity(e.target.value);
    } else if (e.target.name === "luminescence") {
      setLuminescence(e.target.value);
    } else if (e.target.name === "radioactivity") {
      setRadioactivity(e.target.value);
    } else if (e.target.name === "optical") {
      setOptical(e.target.value);
    } else if (e.target.name === "references") {
      setReferences(e.target.value);
    }
  }


  // Function that generate the input fields for the form 
  function generateInputs() {
    const inputs = [];
    const inputNames = [
      "name",
      "image",
      "clasification",
      "etymology",
      "atmosphere",
      "applications",
      "main_locations",
      "diffractogram",
      "chemical_formula",
      "molecular_weight",
      "elemental_chemistry",
      "chemistry_oxides",
      "cell_dimension",
      "crystalline_system",
      "x_ray_diffraction",
      "gloss",
      "color",
      "hardness",
      "stripe",
      "fracture",
      "crystal_habit",
      "diaphanous",
      "exfoliation",
      "density",
      "luminescence",
      "radioactivity",
      "optical",
      "references",
    ];

    for (let i = 0; i < inputNames.length; i++) {
      inputs.push(
        <div className="mb-4" key={i}>
          <label className="block text-gray-700 text-sm font-bold mb-2">{inputNames[i]}</label>
          <input
            type="text"
            name={inputNames[i]}
            onChange={handleChange}
            value={inputNames[i] === "name" ? name : inputNames[i] === "image" ? image : inputNames[i] === "clasification" ? clasification : inputNames[i] === "etymology" ? etymology : inputNames[i] === "atmosphere" ? atmosphere : inputNames[i] === "applications" ? applications : inputNames[i] === "main_locations" ? main_locations : inputNames[i] === "diffractogram" ? diffractogram : inputNames[i] === "chemical_formula" ? chemical_formula : inputNames[i] === "molecular_weight" ? molecular_weight : inputNames[i] === "elemental_chemistry" ? elemental_chemistry : inputNames[i] === "chemistry_oxides" ? chemistry_oxides : inputNames[i] === "cell_dimension" ? cell_dimension : inputNames[i] === "crystalline_system" ? crystalline_system : inputNames[i] === "x_ray_diffraction" ? x_ray_diffraction : inputNames[i] === "gloss" ? gloss : inputNames[i] === "color" ? color : inputNames[i] === "hardness" ? hardness : inputNames[i] === "stripe" ? stripe : inputNames[i] === "fracture" ? fracture : inputNames[i] === "crystal_habit" ? crystal_habit : inputNames[i] === "diaphanous" ? diaphanous : inputNames[i] === "exfoliation" ? exfoliation : inputNames[i] === "density" ? density : inputNames[i] === "luminescence" ? luminescence : inputNames[i] === "radioactivity" ? radioactivity
              : inputNames[i] === "optical" ? optical : inputNames[i] === "references" ? references : ""}
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
          <form onSubmit={handleSubmit}>
          {generateInputs()}
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
