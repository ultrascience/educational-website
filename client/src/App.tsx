import Gallery from "./components/Gallery";
import Scene3D from "./components/Scene3D";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Forms from "./components/Forms";
import { GalleryProps } from "./components/Types";
/**
 * Component: App
 * Charge the json api containing the images and names and the 3D scene
 */
function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // useState to store the images and names from the json api
  const [models, setModels] = useState<GalleryProps[]>([]);

  /** Carga el json en api/rocks/info con la libreria de axios */
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/rocks/info")
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
            <Route path="/gallery" element={<Gallery gallery={models} />} />
            <Route path="/forms" element={<Forms />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
