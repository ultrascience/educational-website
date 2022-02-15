import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Escena from "./componentes/EscenaModelo/Escena";
import Forms from "./componentes/Forms";
import Delete from "./componentes/Delete";
import Galeria from "./componentes/Galeria";
import SearchBar from "./componentes/SearchBar";
import Banner from "./componentes/Banner";
import { ModelTypeGallery } from "./componentes/Tipos";

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
            .get("http://localhost:8080/api/rocks/get-names")
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
        return <div>No se pudo cargar la informacion</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <Router>
                    <Routes>
                        <Route path="/gallery" element={<Galeria gallery={models} />}/>
                        <Route path="/append-item" element={<Forms />} />
                        <Route path="/edit-item/:id" element={<Forms/>} />
                        <Route path="/delete-items" element={<Delete/>}/>
                        <Route path="/3d-models/:id" element={<Escena />}/>
                        <Route path="/banner" element={<Banner />}/>
                    </Routes>
                </Router>
            </>
        );
    }
}


export default App;
