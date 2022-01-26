import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forms from "./components/Forms";
import Gallery from "./components/Gallery";
import Scene3D from "./components/Scene3D";
import { ModelTypeGallery } from "./components/Types";

/**
 * Component: App
 * Charge the json api containing the images and names
 */
function App(): JSX.Element {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [models, setModels] = useState<ModelTypeGallery[]>([]);
  const [idModelSelected, setIdModelSelected] = useState<string>("");

  /** Charge the json api containing the images and names */
  useEffect(() => {
    axios
  .get("http://localhost:8080/api/rocks/get-images")
      .then((res) => {
        setModels(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setIsLoaded(true);
      });
  }, []);

  if (error) {
    return <div>Error loading the json</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/gallery" element={<Gallery gallery={models} idModelSelected={idModelSelected} setIdModelSelected={setIdModelSelected} />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/3d-models/:id" element={<Scene3D idModelSelected={idModelSelected} />} />
          </Routes>
        </Router>
      </>
    );
  }
}


export default App;
