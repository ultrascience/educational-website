import "../styles/sceneModel.css"
import {Link, Route} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import Scene3D from "./Scene3D";
import Physical from "./properties/Physical";
import Chemical from "./properties/Chemical";
import Optical from "./properties/Optical";
import Crystallographic from "./properties/Crystallographic";

function Gallery() {
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
                <img style={{ "width": "100%","height":"270px" }} src="/header.jpg" alt="banner" />
                <div className="grid grid-cols-3 gap-4" >
                    {models.map(model => (
                        <div className="bg-green-500">
                            <p className="text-lg" key={model.id}>
                                <img src={"/"+model.name.toLowerCase()+".png"} alt="modelo roca"/>
                                <li><Link to={"/" + model.name.toLowerCase()}>{model.name}</Link></li>
                            </p>
                        </div>
                    ))}

                </div>


            </>
        );
    }

}

export default Gallery;
