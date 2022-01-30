import axios from "axios";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Forms from "./componentes/Forms";
import Galeria from "./componentes/Galeria";
import Escena from "./componentes/EscenaModelo/Escena";
import {ModelTypeGallery} from "./componentes/Tipos";
import React from "react";

/**
 * Componente: App
 * Carga el json que contiene las imagenes y los nombres
 */
function App(): JSX.Element {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [models, setModels] = useState<ModelTypeGallery[]>([]);
    const [idModelSelected, setIdModelSelected] = useState<string>("");

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
                        <Route path="/gallery" element={<Galeria gallery={models} idModelSelected={idModelSelected}
                                                                 setIdModelSelected={setIdModelSelected}/>}/>
                        <Route path="/forms" element={<Forms/>}/>
                        <Route path="/3d-models/:id" element={<Escena idModelSelected={idModelSelected}/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}


export default App;
