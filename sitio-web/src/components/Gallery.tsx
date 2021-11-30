import "../styles/sceneModel.css"
import {Link} from "react-router-dom";
import Scene3D from "./Scene3D";
import {Routes, Route} from "react-router"
function Gallery() {
  return (
      /* CSS grid with 10 rows and 2 columns tailwind classes */
      <>
      <div className="grid grid-cols-3 gap-4">
      <div className="bg-red-500">
          <li><Link to = '/danburita'>Danburita</Link></li>
      </div>
      <div className="bg-red-500"> Modelo 3D</div>
      <div className="bg-red-500"> Modelo 3D</div>
      <div className="bg-red-500"> Modelo 3D</div>
      <div className="bg-red-500"> Modelo 3D</div>
      <div className="bg-red-500"> Modelo 3D</div>
      <div className="bg-red-500"> Modelo 3D</div>
      <div className="bg-red-500"> Modelo 3D</div>
      <div className="bg-red-500"> Modelo 3D</div>
        </div>
      </>
      );
}
export default Gallery;
