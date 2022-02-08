import {Link} from "react-router-dom";
import {ArrayGalleryProps} from "./Tipos";
import {imageConverter64} from "./Utils";
import React from "react";

/**
 * Function that render a gallery of 3D models
 * style: Tailwind CSS Grid 4 rows
 * React Router: Link to each model
 * img: image of the model using arrayBufferToBase64a(image.data)
 * map on image respect props
 */
function Galeria(props: ArrayGalleryProps): JSX.Element {
    return (<>
            <div className="flex flex-wrap justify-center">
                {props.gallery.map(({_id, name}) => (<div className="p-2 w-1/4" key={_id}>
                        <div className="overflow-hidden max-w-sm rounded shadow-lg">
                            <img className="w-full" src={"http://localhost:8080/api/rocks/get-image/" + _id} alt={name}/>
                            <div className="py-4 px-6">
                                <p className="text-base text-gray-700">
                                    <Link to={`/3d-models/${_id}`} onClick={() => props.setIdModelSelected(_id)}>
                                        <button
                                            className="py-2 px-4 font-bold text-black hover:text-white bg-white hover:bg-blue-400 rounded">
                                            {name}
                                        </button>
                                    </Link>
                                </p>
                            </div>

                        </div>

                    </div>))}
            </div>

        </>);
}

export default Galeria;
