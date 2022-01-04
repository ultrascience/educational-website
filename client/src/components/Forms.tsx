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
        "type": "array",
        "items": [
          {
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
          }
        ]
      },
      "properties": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "chemical": {
                "type": "array",
                "items": [
                  {
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
                  }
                ]
              },
              "crystallographic": {
                "type": "array",
                "items": [
                  {
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
                  }
                ]
              },
              "physical": {
                "type": "array",
                "items": [
                  {
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
                  }
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
          }
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



  // Define type to uploads images
  // type File = Blob | File;
  const namesArray = ["name", "description", "image", "classification"];
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  // hooks useState fileUplodad typescript
  const [fileUpload, setFileUpload] = useState<File>();
  // hook jsonPrueba typescript with type JsonProps
  const [jsonPrueba, setJsonPrueba] = useState<JsonProps>({
    name: "",
    image: "",
    classification: "",
    introduction: [{
      etymology: "",
      atmosphere: "",
      applications: "",
      main_locations: "",
      diffractogram: "",
    }],
    properties: [{
      chemical: [{
        chemical_formula: "",
        molecular_weight: "",
        elemental_chemistry: "",
        chemistry_oxides: "",
      }],
      crystallographic: [
        {
          cell_dimension: "",
          crystalline_system: "",
          x_ray_diffraction: "",
        }
      ],
      physical: [{
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
      }],
      optical: "",
    }],
    references: "",
    // });
  });

  // Function to map properties of jsonSchema
  function mapProperties(jsonSchema: any): any {
    const { properties } = jsonSchema;
    // Map properties keys and values of jsonSchema and print on console
    return Object.keys(properties).map((key: string) => {
      const { type } = properties[key];
      if (type === "string") {
        return (
          // input form using tailwindcss
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {key}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder={key}
              onChange={(e: any) => setJsonPrueba({ ...jsonPrueba, [key]: e.target.value })}
            />
          </div>
        );
      }
      else if (type === "array") {
        return (
          mapProperties(properties[key].items[0])

        );
      }
    });
  }




  // handleChange function to update jsonPrueba with the values of the inputs
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setJsonPrueba({ ...jsonPrueba, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios.post("http://localhost:8080/api/rocks/", jsonPrueba)
      .then(() => {
        setLoading(false);
        setSuccess(true);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileUpload(e.target.files?.[0]);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        <div className="focus-within:border-transparent border-2 border-gray-300 rounded-lg p-4 w-full md:w-1/2">
          <form onSubmit={handleSubmit}>
            {mapProperties(jsonSchema)}
          </form>
        </div>
      </div>
    </div>



  );
}
// Export component
export default Forms;

