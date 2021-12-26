import "../styles/sceneModel.css";
import { Link, Route, Routes } from "react-router-dom";
import Scene3D from "./Scene3D";
import { ArrayGalleryProps } from "./Types";

/*
 * Gallery component
 * Displays a list of models based on the search query from the db.json
 * Show a link for each model in the database.
 */
function Gallery(props: ArrayGalleryProps): JSX.Element {
  return (
    <>
      {props.gallery.map(({ _id, name, image }) => (
        <div className="bg-green-500">
          <p className="text-lg" key={_id}>
            <img src={"/img/" + image} alt="modelo roca" />
            <li>
              <Link to={"/rocks/" + _id}>{name}</Link>
            </li>
          </p>
        </div>
      ))}
    </>
  );
}

export default Gallery;
