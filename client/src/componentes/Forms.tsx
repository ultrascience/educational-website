import axios from "axios";
import React, { useState } from "react";
import '../estilos/index.css';
import Button from "./Button";
import { GenerateInputsFileProps, GenerateInputsProps } from "./Tipos";

// Component that send the form data to the server and returns the response to the user in the form of a JSON object using JsonProps interface and tailwindcss and typescript
// The form data is sent to the server using axios and the response is returned to the user in the form of a JSON object 
// to the route "http://localhost:8080/api/rocks/upload"
function Forms(): JSX.Element {
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | undefined>();
  const [modelo3D, setModelo3D] = useState<File | undefined>();
  const [clasification, setClasification] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [chemical_formula, setChemicalFormula] = useState<File | undefined>();
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


  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
      console.log("image changed");
    } else {
      console.log("image not changed");
    }
  };

  const onFileChangeChemicalFormula = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setChemicalFormula(e.target.files[0]);
      console.log(e.target.files[0]);
      console.log("chemical formula changed");
    } else {
      console.log("chemical formula not changed");
    }
  };

  const onFileChangeModelo3D = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setModelo3D(e.target.files[0]);
      console.log(e.target.files[0]);
      console.log("modelo 3d changed");
    } else {
      console.log("modelo 3d not changed");
    }
  };

  // Function handleChange that takes the name of the input and the value of the input and sets the value of the input to the state of the component
  // The state of the component is the value of the input
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "clasification":
        setClasification(e.target.value);
        break;
      case "introduction":
        setIntroduction(e.target.value);
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

    // check is chemical formula no is undefined
    if (chemical_formula === undefined) {
      alert("Please select a chemical formula");
      return;
    }
    if (modelo3D === undefined) {
      alert("Please select a 3D model");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("modelo3D", modelo3D);
    formData.append("clasification", clasification);
    formData.append("introduction", introduction);
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
    console.log(image);
    console.log(chemical_formula);

  }


  // Function that generate the input fields for the form
  function GenerateInputs(props: GenerateInputsProps) {
    const inputs = [];

    const diccionario = props.dictionary;
    for (const llave in diccionario) {
      if (llave == "introduction") {
        inputs.push(
          <div className="mb-2" key={llave}>
            <label
              className="form-label"
              htmlFor={llave}>{diccionario[llave]}</label>
            <textarea
              className="form-input"
              id={llave}
              name={llave}
              onChange={handleChange}
            />
          </div>
        );
      } else {
        inputs.push(
          <div className="mb-2" key={llave}>
            <label
              className="form-label"
              htmlFor={llave}>{diccionario[llave]}</label>
            <input
              type="text"
              className="form-input"
              id={llave}
              name={llave}
              onChange={handleChange}
            />
          </div>
        );
      }
    }
    return (
      <div>
        {inputs}
      </div>
    );
  }



  function GenerateInputsFile(props: GenerateInputsFileProps) {
    const inputs = [];
    // iterate on keys props.dictionary
    const diccionario = props.dictionary;
    for (const key in diccionario) {
      inputs.push(
        <div className="mb-2" key={key}>
          <label
            className="form-label"
            htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input
            type="file"
            className="py-2 px-3 w-full leading-tight text-gray-700 rounded border focus:outline-none shadow appearance-none cursor-pointer"
            id={key}
            name={key}
            onChange={diccionario[key]}
          />
        </div>
      );
    }
    return (
      <div>
        Archivos
        {inputs}
      </div>
    );
  }

  // Return the form using tailwind classes
  // The form is generated using the function generateInputs()
  // dicctionary to execute a onChnage event
  const diccionario: { [llave: string]: (e: React.ChangeEvent<HTMLInputElement>) => void } = {
    "imagen": onFileChange,
    "formula": onFileChangeChemicalFormula,
    "modelo3D": onFileChangeModelo3D,
  }

  // Create a dictionary from inputNames and the corresponding state of the component
  const inputNamesDictionary: { [key: string]: string } = {
    "name": "Nombre",
    "clasification": "Clasificación",
    "introduction": "Introducción",
    "molecular_weight": "Peso molecular",
    "elemental_chemistry": "Química elemental",
    "chemistry_oxides": "Oxígeno",
    "cell_dimension": "Dimensión de la celda",
    "crystalline_system": "Sistema cristalino",
    "x_ray_diffraction": "Difracción por X-ray",
    "gloss": "Lustre",
    "color": "Color",
    "hardness": "Dureza",
    "stripe": "Rayas",
    "fracture": "Fractura",
    "crystal_habit": "Hábito cristalino",
    "diaphanous": "Diáfano",
    "exfoliation": "Exfoliación",
    "density": "Densidad",
    "luminescence": "Luminiscencia",
    "radioactivity": "Radioactividad",
    "optical": "Óptico",
    "references": "Referencias",

  }
  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap justify-center">
        <div
          className="p-4 w-full rounded-lg border-2 border-gray-300 focus-within:border-transparent md:w-1/2">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <GenerateInputs dictionary={inputNamesDictionary} />
            <GenerateInputsFile dictionary={diccionario} />
          </form>
          <Button
            type="submit"
            onClick={handleSubmit}
            text="Enviar"
          />
        </div>
      </div>
    </div>
  );


}

export default Forms;
