import { Link } from "react-router-dom";
import "../styles/sceneModel.css";
import { ArrayGalleryProps } from "./Types";
import { imageConverter64 } from "./Utils";
/**
 * Function that render a gallery of 3D models 
 * style: Tailwind CSS Grid 4 rows 
 * React Router: Link to each model
 * img: image of the model using arrayBufferToBase64a(image.data)
 * map on image respect props
*/
function Gallery(props: ArrayGalleryProps): JSX.Element {
  return (
  <>
    <div className="flex flex-wrap justify-center">
      {props.gallery.map(({ _id, name, image }) => (
        <div className="w-1/4 p-2" key={_id}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imageConverter64(image.data)} alt="model" />

            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                <Link to={`/3d-models/${_id}`} onClick={() => props.setIdModelSelected(_id)}>
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

    </>
  );
}

export default Gallery;
