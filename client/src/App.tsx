import Gallery from './components/Gallery'
import Scene3D from './components/Scene3D'
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

/**
 * Component: App
 * Charge the json api containing the images and names and the 3D scene
 */
function App() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [models, setModels] = useState([] as any[]);

    /** Here the json is loaded */
    useEffect(() => {
        fetch("http://localhost:8080/api/getNames")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setModels(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error loading the json</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<h1> Hola Mundo </h1>} />
                    </Routes>
                </Router>

            </>
        );
    }

}

export default App
