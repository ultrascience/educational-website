import axios from "axios";
import { useState } from "react";
import { JsonProps } from "./Types";
import '../styles/button.css';

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
      name: "joselin",
      image: "joselin",
      clasification: "joselin",
      introduction: {
        etymology: "joselin",
        atmosphere: "joselin",
        applications: "joselin",
        main_locations: "joselin",
        diffractogram: "joselin",
      },
      properties: {
        chemical: {
          chemical_formula: "joselin",
          molecular_weight: "joselin",
          elemental_chemistry: "joselin",
          chemistry_oxides: "joselin",
        },
        crystallographic:
        {
          cell_dimension: "joselin",
          crystalline_system: "joselin",
          x_ray_diffraction: "joselin",
        }
        ,
        physical: {
          gloss: "joselin",
          color: "joselin",
          hardness: "joselin",
          stripe: "joselin",
          fracture: "joselin",
          crystal_habit: "joselin",
          diaphanous: "joselin",
          exfoliation: "joselin",
          density: "joselin",
          luminescence: "joselin",
          radioactivity: "joselin",
        },
        optical: "joselin",
      },
      references: "joselin",
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
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="clasification"
              >
                Clasification
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                value={jsonPrueba.clasification}
              />
            </div>
            <div className="mb-4">
            <label 
              className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="introduction"
            >
              Introduction
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="introduction" 
              type="text" 
              name="introduction" 
              placeholder="Enter the introduction"
              onChange={(event: any) => {
                setJsonPrueba({
                  ...jsonPrueba,
                  // introduction: event.target.value
                  introduction: {
                    ...jsonPrueba.introduction,
                    etymology: event.target.value,
                    atmosphere: event.target.value
                  }
                });
              }}
              value={"Valor de prueba"}
            />
            </div>
          </form>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
