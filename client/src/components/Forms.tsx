import axios from "axios";
import { abort } from "process";
import { useState } from "react";
//

const pruebaJson = {
  clasification: "prueba json",
  image: "prueba json",
  name: "prueba json",
  introduction: [
    {
      etymology: "prueba json",
      atmosphere: "prueba json",
      applications: "prueba json",
      main_locations: "prueba json",
      diffractogram: "prueba json",
    },
  ],
  properties: [
    {
      chemical: [
        {
          chemical_formula: "prueba json",
          molecular_weight: "prueba json",
          elemental_chemistry: "prueba json",
          chemistry_oxides: "prueba json",
        },
      ],
      crystallographic: [
        {
          cell_dimension: "prueba json",
          crystalline_system: "prueba json",
          x_ray_diffraction: "prueba json",
        },
      ],
      physical: [
        {
          gloss: "prueba json",
          color: "prueba json",
          hardness: "prueba json",
          stripe: "prueba json",
          fracture: "prueba json",
          crystal_habit: "prueba json",
          diaphanous: "prueba json",
          exfoliation: "prueba json",
          density: "prueba json",
          luminescence: "prueba json",
          radioactivity: "prueba json",
        },
      ],
      optical: "prueba json",
    },
  ],
  references: "prueba json",
};

// Component that send jsonPrueba to the server route localhost:8080/api/rocks/ with tailwindcss and typescript
function Forms() {
  const [jsonPrueba, setJsonPrueba] = useState(pruebaJson);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/rocks/",
        jsonPrueba
      );
      if (response.status === 201) {
        setSuccess(true);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setJsonPrueba({ ...jsonPrueba, [name]: value });
  };

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
                onChange={handleChange}
                value={jsonPrueba.clasification}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Images
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="text"
                name="image"
                placeholder="Enter the image"
                onChange={handleChange}
                value={jsonPrueba.image}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="introduction"
              >
                introduction
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="introduction"
                type="text"
                name="introduction"
                placeholder="Enter the introduction"
                onChange={handleChange}
                value={jsonPrueba.image}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="properties"
              >
                properties
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="properties"
                type="text"
                name="properties"
                placeholder="Enter the properties"
                onChange={handleChange}
                value={jsonPrueba.image}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="references"
              >
                references
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="references"
                type="text"
                name="references"
                placeholder="Enter the references"
                onChange={handleChange}
                value={jsonPrueba.references}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter the name"
                onChange={handleChange}
                value={jsonPrueba.name}
              />
            </div>
          </form>

        <button
          className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleSubmit} 
        > 
          {loading ? "Loading" : "Send"} 
        </button> 
        </div>

      </div>
    </div>
  );
}
// Export component
export default Forms;
