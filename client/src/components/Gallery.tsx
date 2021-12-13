import "../styles/sceneModel.css"
import { Link, Route, Routes } from "react-router-dom";
import Scene3D from "./Scene3D";

type GalleryProps = {
    namemodels: any[];
}

/*
 * Gallery component
 * Displays a list of models based on the search query from the db.json
 * Show a link for each model in the database.
 */
function Gallery(props: GalleryProps) {
    return (
        <>
            <img style={{ "width": "100%", "height": "270px" }} src="/header.jpg" alt="banner" />
            <div className="grid grid-cols-3 gap-4" >
                {/*Go through the names of the 3D models and render an image with its respective link to the information of the model*/}
                {props.namemodels.map((model: any) => (
                    <div className="bg-green-500">
                        <p className="text-lg" key={model.id}>
                            <img src={"/" + model.name.toLowerCase() + ".png"} alt="modelo roca" />
                            <li><Link to={"/rocks/" + model.name.toLowerCase()}>{model.name}</Link></li>
                        </p>
                    </div>
                ))}
            <Routes>
                        <Route path="/rocks/:id" element={<Scene3D namemodel={useParam} />} />
              </Routes>
            </div>


        </>
    );

}

export default Gallery;
