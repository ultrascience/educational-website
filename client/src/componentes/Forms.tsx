import axios from "axios";
import React, { useState } from "react";
import '../estilos/index.css';
import Button from "./Button";
import {
  useParams
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Component that send the form data to the server and returns the response to the user in the form of a JSON object using JsonProps interface and tailwindcss and typescript
// The form data is sent to the server using axios and the response is returned to the user in the form of a JSON object 
// to the route "http://localhost:8080/api/rocks/upload"
function Forms() {
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | undefined>();
  const [modelo3D, setModelo3D] = useState<File | undefined>();
  const [chemical_formula, setChemicalFormula] = useState<File | undefined>();
  const [clasification, setClasification] = useState("");
  const [formula, setFormula] = useState("");
  const [introduction, setIntroduction] = useState("");
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
  const { id } = useParams();
  const notify = () => toast("Wow so easy!");


  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
      console.log("image changed");
    } else {
      console.log("image not changed");
    }
  };

  const onChangeChemicalFormula = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setChemicalFormula(e.target.files[0]);
      console.log(e.target.files[0]);
      console.log("chemical formula changed");
    } else {
      console.log("chemical formula not changed");
    }
  };

  const onChangeModelo3D = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      case "formula":
        setFormula(e.target.value);
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
      alert("Please upload an image");
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
    formData.append("formula", formula);
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

    if (id === undefined) {
      axios.post("http://localhost:8080/api/rocks/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(res => {
        if (res.status === 200) {
          {
            toast.success('Modelo creado con exito', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        } else {
          {
            toast.error('No se pudo crear el modelo', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        }

      });
      console.log("form submitted");
    }

    if (id !== undefined) {
      axios.patch(`http://localhost:8080/api/rocks/edit/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(res => {
        console.log(res);
        console.log(res.data);
      });
      console.log("Edit form submitted");
    }

  }

  function errorAlert() {
    return (
      <div className="relative py-3 px-4 text-red-700 bg-red-100 rounded border border-red-400" role="alert">
        <strong className="font-bold">Holy smokes!</strong>
        <span className="block sm:inline">Something seriously bad happened.</span>
        <span className="absolute inset-y-0 right-0 py-3 px-4">
          <svg className="w-6 h-6 text-red-500 fill-current" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
        </span>
      </div>

    );
  }

  function successAlert() {
    return (
      <div className="py-3 px-4 text-teal-900 bg-teal-100 rounded-b border-t-4 border-teal-500 shadow-md" role="alert">
        <div className="flex">
          <div className="py-1"><svg className="mr-4 w-6 h-6 text-teal-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
          <div>
            <p className="font-bold">Our privacy policy has changed</p>
            <p className="text-sm">Make sure you know how these changes affect you.</p>
          </div>
        </div>
      </div>
    );
  }


  // Function that generate the input fields for the form
  function GenerateInputs(diccionario: any, title: string) {
    const inputs = [];

    let llave: string;
    for (llave in diccionario) {
      if (llave == "introduction") {
        inputs.push(
          <div className="mb-2" key={llave}>
            <label
              className="form-label"
              htmlFor={llave}>{diccionario[llave]}</label>
            <textarea
              className="form-input" placeholder="Introducción"
              id={llave}
              name={llave}
              rows={5}
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
        <div className="p-2 my-4 font-bold text-center text-white bg-green-500">
          {title}
        </div>
        {inputs}
      </div>
    );
  }

  function GenerateInputsFile(diccionario: any) {
    const inputs = [];
    // iterate on keys props.dictionary
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
        <div className="p-2 my-4 font-bold text-center text-white bg-green-500">
          Archivos
        </div>
        {inputs}
      </div>
    );
  }


  // Return the form using tailwind classes
  // The form is generated using the function generateInputs()
  // dicctionary to execute a onChnage event

  // Create a dictionary from inputNames and the corresponding state of the component
  const inputsIntroduction: { [key: string]: string } = {
    "name": "Nombre",
    "clasification": "Clasificación",
    "optical": "Información óptica",
    "formula": "Formula Quimica",
    "references": "Fuentes de Consulta"

  }

  const propiedadesFisicas: { [key: string]: string } = {
    "gloss": "Lustre",
    "color": "Color",
    "hardness": "Dureza",
    "stripe": "Raya",
    "fracture": "Fractura",
    "crystal_habit": "Hábito cristalino",
    "diaphanous": "Diafanidad",
    "exfoliation": "Exfoliación",
    "density": "Densidad",
    "luminescence": "Luminiscencia",
    "radioactivity": "Radioactividad"
  }

  const propiedadesQuimicas: { [key: string]: string } = {
    "molecular_weight": "Peso molecular",
    "elemental_chemistry": "Composición Química elemental",
    "chemistry_oxides": "Composición Química de los óxidos",
  }

  const propiedadesCristalograficas: { [key: string]: string } = {
    "cell_dimension": "Dimensión de celda",
    "crystalline_system": "Sistema cristalino",
    "x_ray_diffraction": "Difracción de rayos X"
  }

  const archivos: { [llave: string]: (e: React.ChangeEvent<HTMLInputElement>) => void } = {
    "imagen": onChangeImage,
    "formula": onChangeChemicalFormula,
    "modelo3D": onChangeModelo3D,
  }

  return (
    <div className="container p-2 m-auto">
      <div className="flex flex-wrap justify-center">
        <div
          className="p-4 w-full rounded-lg border-2 border-gray-300 md:w-1/2">
          <div className="p-2 text-center">
            <h2 className="text-2xl font-bold">
              Formulario de Registro
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            {GenerateInputs(inputsIntroduction, "Introducción")}
            {GenerateInputs(propiedadesFisicas, "Propiedades Físicas")}
            {GenerateInputs(propiedadesQuimicas, "Propiedades Quimicas")}
            {GenerateInputs(propiedadesCristalograficas, "Propiedades Cristalograficas")}
            {GenerateInputsFile(archivos)}
          </form>
          <div className="flex justify-center">
            <Button
              type="submit"
              onClick={handleSubmit}
              text="Enviar"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );


}

export default Forms;
