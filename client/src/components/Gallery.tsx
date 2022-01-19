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
      <h1>Gallery</h1>
      {props.gallery.map(({ _id, name, image }) => (
        <div className="bg-green-500" key={_id}>
          <p className="text-lg" key={_id}>
            <img src={arrayBufferToBase64a(image.data)} alt="img" />
            <li>
              <Link to={"/rocks/" + _id}>{name}</Link>
            </li>
          </p>
        </div>
      ))}
    </>
  );
}


// function that conver img to base64 using arrayBufferToBase64
function arrayBufferToBase64a(img: any) {
  const base64Flag = 'data:image/jpeg;base64,';
  const imageStr = arrayBufferToBase64(img.data);
  return base64Flag + imageStr;
}

const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  let binary = '';
  const bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};


export default Gallery;
