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
 * Charge the json file and render the gallery
 */
function App() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [models, setModels] = useState([] as any[]);

    /** Here the json is loaded */
    useEffect(() => {
        fetch("http://localhost:3004/rocks")
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
        return <div>Error</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<Gallery namemodels={models} />} />
                    </Routes>
                </Router>

            </>
        );
    }

}

export default App
