import "../styles/sceneModel.css";
import { Link, Route, Routes } from "react-router-dom";
import Scene3D from "./Scene3D";
import { ArrayGalleryProps } from "./Types";

/**
 * Function that render a gallery of 3D models 
 * style: Tailwind CSS Grid 4 rows 
 * React Router: Link to each model
 * img: image of the model using arrayBufferToBase64a(image.data)
 * map on image respect props
*/
function Gallery(props: ArrayGalleryProps) {
  return (
    <div className="flex flex-wrap justify-center">
      {props.gallery.map(({ _id, name, image }) => (
        <div className="w-1/4 p-2" key={_id}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={arrayBufferToBase64a(image.data)} alt="model" />

            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                <Link to={`/3d-models/${_id}`}>
                  <button className="bg-white hover:bg-blue-400 hover:text-white text-black font-bold py-2 px-4 rounded">
                    {name}
                  </button>
                </Link>
              </p>
            </div>

          </div>

        </div>
      ))}
    </div>
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
