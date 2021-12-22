import Gallery from './components/Gallery'
import Scene3D from './components/Scene3D'
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import axios from 'axios';

/**
 * Component: App
 * Charge the json api containing the images and names and the 3D scene
 */
function App() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [models, setModels] = useState([] as any[]);

    /** Carga el json en api/rocks/info con la libreria de axios */
    useEffect(() => {
        axios.get('http://localhost:8080/api/rocks/info')
            .then(res => {
                setModels(res.data);
                setIsLoaded(true);
            })
            .catch(err => {
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
                        <Route path="/" element={<h1> Hola Mundo </h1>} />
                    </Routes>
                </Router>

            </>
        );
    }

}

export default App
