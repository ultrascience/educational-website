import Gallery from "./components/Gallery";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Forms from "./components/Forms";
import { GalleryProps } from "./components/Types";

/**
 * Component: App
 * Charge the json api containing the images and names
 */
function App(): JSX.Element {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // useState to store the images and names from the json api
  const [models, setModels] = useState<GalleryProps[]>([]);

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
            <Route path="/gallery" element={<Gallery gallery={models} />} />
            <Route path="/forms" element={<Forms />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
