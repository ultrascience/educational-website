import axios from "axios";
import { useState } from "react";
import { JsonProps } from "./Types";
import '../styles/button.css';

// Component that send jsonPrueba to the server route localhost:8080/api/rocks/ with tailwindcss and typescript
function Forms() {

  const jsonSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "image": {
        "type": "string"
      },
      "classification": {
        "type": "string"
      },
      "introduction": {
        "type": "object",
        "properties": {
          "etymology": {
            "type": "string"
          },
          "atmosphere": {
            "type": "string"
          },
          "applications": {
            "type": "string"
          },
          "main_locations": {
            "type": "string"
          },
          "diffractogram": {
            "type": "string"
          }
        },
        "required": [
          "etymology",
          "atmosphere",
          "applications",
          "main_locations",
          "diffractogram"
        ]
      },
      "properties": {
        "type": "object",
        "properties": {
          "chemical": {
            "type": "object",
            "properties": {
              "chemical_formula": {
                "type": "string"
              },
              "molecular_weight": {
                "type": "string"
              },
              "elemental_chemistry": {
                "type": "string"
              },
              "chemistry_oxides": {
                "type": "string"
              }
            },
            "required": [
              "chemical_formula",
              "molecular_weight",
              "elemental_chemistry",
              "chemistry_oxides"
            ]
          },
          "crystallographic": {
            "type": "object",
            "properties": {
              "cell_dimension": {
                "type": "string"
              },
              "crystalline_system": {
                "type": "string"
              },
              "x_ray_diffraction": {
                "type": "string"
              }
            },
            "required": [
              "cell_dimension",
              "crystalline_system",
              "x_ray_diffraction"
            ]
          },
          "physical": {
            "type": "object",
            "properties": {
              "gloss": {
                "type": "string"
              },
              "color": {
                "type": "string"
              },
              "hardness": {
                "type": "string"
              },
              "stripe": {
                "type": "string"
              },
              "fracture": {
                "type": "string"
              },
              "crystal_habit": {
                "type": "string"
              },
              "diaphanous": {
                "type": "string"
              },
              "exfoliation": {
                "type": "string"
              },
              "density": {
                "type": "string"
              },
              "luminescence": {
                "type": "string"
              },
              "radioactivity": {
                "type": "string"
              }
            },
            "required": [
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
              "radioactivity"
            ]
          },
          "optical": {
            "type": "string"
          }
        },
        "required": [
          "chemical",
          "crystallographic",
          "physical",
          "optical"
        ]
      },
      "references": {
        "type": "string"
      }
    },
    "required": [
      "name",
      "image",
      "classification",
      "introduction",
      "properties",
      "references"
    ]
  }

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  // hooks useState fileUplodad typescript
  const [fileUpload, setFileUpload] = useState<File>();
  // hook jsonPrueba typescript with type JsonProps
  const [jsonPrueba, setJsonPrueba] = useState(
    {
      name: "",
      image: "",
      classification: "",
      introduction: {
        etymology: "",
        atmosphere: "",
        applications: "",
        main_locations: "",
        diffractogram: "",
      },
      properties: {
        chemical: {
          chemical_formula: "",
          molecular_weight: "",
          elemental_chemistry: "",
          chemistry_oxides: "",
        },
        crystallographic:
        {
          cell_dimension: "",
          crystalline_system: "",
          x_ray_diffraction: "",
        }
        ,
        physical: {
          gloss: "",
          color: "",
          hardness: "",
          stripe: "",
          fracture: "",
          crystal_habit: "",
          diaphanous: "",
          exfoliation: "",
          density: "",
          luminescence: "",
          radioactivity: "",
        },
        optical: "",
      },
      references: "",
      // });
    }
  );

  // Function to create inputs for the form and send the jsonPrueba to the server route localhost:8080/api/rocks/ 
  // with tailwindcss and typescript 
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData();
    // formData.append("file", fileUpload);
    formData.append("jsonPrueba", JSON.stringify(jsonPrueba));
    axios.post("http://localhost:8080/api/rocks/", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => {
        setSuccess(true);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  }

  // Function handleChange 
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setJsonPrueba({ ...jsonPrueba, [name]: value });
  }

  // Function to iterate over the jsonSchema properties and create the inputs for the form 
  // with tailwindcss and typescript 
  function createInputs(jsonSchema: any) {
    const { properties } = jsonSchema;

    const inputs: JSX.Element[] = [];
    let valor: any;

    for (const key in properties) {
      const { type } = properties[key];

      if (type === "string") {
        inputs.push(
          <div className="mb-4" key={key}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
              {key}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={key}
              type="text"
              name={key}
              value={jsonPrueba.image}
              onChange={handleChange}
            />
          </div>
        );
      }
      else if (type === "object") {
        inputs.push(
          <div className="mb-4" key={key}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
              {key}
            </label>
            <div className="flex flex-wrap">
              {createInputs(properties[key])}
            </div>
          </div>
        );
      }
    }
    return inputs;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        <div className="focus-within:border-transparent border-2 border-gray-300 rounded-lg p-4 w-full md:w-1/2">
          <form onSubmit={handleSubmit}>
          {createInputs(jsonSchema)}
          </form>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
// Export component
export default Forms;
