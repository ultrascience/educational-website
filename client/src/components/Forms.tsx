import axios from "axios";
import { useState } from "react";
import { JsonProps } from "./Types";
import '../styles/index.css';

// Component that send jsonPrueba to the server route localhost:8080/api/rocks/ with tailwindcss and typescript
function Forms() {

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  // hooks useState fileUplodad typescript
  const [fileUpload, setFileUpload] = useState<File>();
  // hook jsonPrueba typescript with type JsonProps
  //
  const [jsonPrueba, setJsonPrueba] = useState<JsonProps>(
    {
      name: "",
      image: "",
      clasification: "",
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

  // Function that send jsonPrueba to the server route localhost:8080/api/rocks/ 
  function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    axios.post("http://localhost:8080/api/rocks/", jsonPrueba)
      .then(function(response) {
        console.log("Exito");
        console.log(response);
        setLoading(false);
        setSuccess(true);
      })
      .catch(function(error) {
        setLoading(false);
        setError(true);
      });
  }


  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        <div className="focus-within:border-transparent border-2 border-gray-300 rounded-lg p-4 w-full md:w-1/2">
          <form onSubmit={handleSubmit}>

            <div className="mb-4">
              <label
                className="form-label"
                htmlFor="name"
              >
                Nombre del Modelo
              </label>
              <input
                className="form-input"
                id="name"
                type="text"
                name="name"
                placeholder="Enter the name of the model"
                onChange={(event: any) => {
                  setJsonPrueba({
                    ...jsonPrueba,
                    name: event.target.value,
                  });
                }}
              />
            </div>

            <div className="mb-4">
              <label
                className="form-label"
                htmlFor="clasification"
              >
                Clasificación
              </label>
              <input
                className="form-input"
                id="clasification"
                type="text"
                name="clasification"
                placeholder="Enter the clasification"
                onChange={(event: any) => {
                  setJsonPrueba({
                    ...jsonPrueba,
                    clasification: event.target.value
                  });
                }}
              />
            </div>

            <div className="mb-4">
              <label
                className="form-label"
                htmlFor="introduction"
              >
                Introduction
              </label>
              <input
                className="form-input"
                id="introduction"
                type="text"
                name="introduction"
                placeholder="Enter the introduction"
                onChange={(event: any) => {
                  setJsonPrueba({
                    ...jsonPrueba,
                    introduction: {
                      ...jsonPrueba.introduction,
                      etymology: event.target.value,
                    }
                  });
                }}
              />
            </div>

            <div className="mb-4">
              <label
                className="form-label"
                htmlFor="Propiedades"
              >
                Propiedades
              </label>
              <input
                className="form-input"
                id="Propiedades"
                type="text"
                name="Propiedades"
                placeholder="Enter the properties"
                onChange={(event: any) => {
                  setJsonPrueba({
                    ...jsonPrueba,
                    properties: {
                      ...jsonPrueba.properties,
                      chemical: {
                        ...jsonPrueba.properties.chemical,
                        chemical_formula: event.target.value,
                      }
                    }
                  });
                }}
              />
            </div>

            <div className="mb-4">
              <label
                className="form-label"
                htmlFor="Referencias"
              >
                Referencias
              </label>
              <input
                className="form-input"
                id="Referencias"
                type="text"
                name="Referencias"
                placeholder="Enter the references"
                onChange={(event: any) => {
                  setJsonPrueba({
                    ...jsonPrueba,
                    references: event.target.value
                  });
                }}
              />
            </div>


          </form>

          <button
            className="btn"
            type="submit"
            onClick={handleSubmit}
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
