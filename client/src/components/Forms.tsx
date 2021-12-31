import axios from "axios";
import { useState } from "react";
import { JsonProps } from "./Types";
import '../styles/button.css';

// Component that send jsonPrueba to the server route localhost:8080/api/rocks/ with tailwindcss and typescript
function Forms() {

// Define type to uploads images
// type File = Blob | File;
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
                htmlFor="name"
              >
                name
              </label>
              <input
                className="form-input"
                id="name"
                type="text"
                name="name"
                placeholder="Enter the name"
                onChange={handleChange}
                value={jsonPrueba.name}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                image
              </label>
              <input type="file" name="image" onChange={e => setFileUpload(e.target.files![0])} />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="classification"
              >
                classification
              </label>
              <input
                className="form-input"
                id="classification"
                type="text"
                name="classification"
                placeholder="Enter the classification"
                onChange={handleChange}
                value={jsonPrueba.classification}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="etymology"
              >
              etymology
              </label>
              <input
                className="form-input"
                id="etymology"
                type="text"
                name="etymology"
                placeholder="Enter the etymology"
                onChange={handleChange}
                value={jsonPrueba.introduction[0].etymology}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="atmosphere"
              >
              atmosphere
              </label>
              <input
                className="form-input"
                id="atmosphere"
                type="text"
                name="atmosphere"
                placeholder="Enter the atmosphere"
                onChange={handleChange}
                value={jsonPrueba.introduction[0].atmosphere}
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
                className="form-input"
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
                className="form-input"
                id="references"
                type="text"
                name="references"
                placeholder="Enter the references"
                onChange={handleChange}
                value={jsonPrueba.references}
              />
            </div>
          </form>

        <button
        className={`${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
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

