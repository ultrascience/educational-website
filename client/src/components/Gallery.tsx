import "../styles/sceneModel.css"
import { Link, Route, Routes } from "react-router-dom";
import Scene3D from "./Scene3D";
import {ArrayGalleryProps} from "./Types";

/*
 * Gallery component
 * Displays a list of models based on the search query from the db.json
 * Show a link for each model in the database.
 */
function Gallery(props: ArrayGalleryProps): JSX.Element {
    return (
        <>
            {props.gallery.map(({_id,name,image}) => (
                <div key={_id}>
                    <h2> Id: {_id}</h2>
                    <h2> Nombre modelo: {name}</h2>
                    <h2>Imagen: {image}</h2>
                </div>
            ))}

        </>
    );

}

export default Gallery;
