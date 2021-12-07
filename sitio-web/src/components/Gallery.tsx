import "../styles/sceneModel.css"
import {Link} from "react-router-dom";

type GalleryProps = {
    models: any;
  }
// function que recibe modelos como parametro json
function Gallery(props: GalleryProps) {
        return (
            <>
                <img style={{ "width": "100%","height":"270px" }} src="/header.jpg" alt="banner" />
                <div className="grid grid-cols-3 gap-4" >
                    {props.models.map((model:any) => (
                        <div className="bg-green-500">
                            <p className="text-lg" key={model.id}>
                                <img src={"/"+model.name.toLowerCase()+".png"} alt="modelo roca"/>
                                <li><Link to={"/rocks/" + model.name.toLowerCase()}>{model.name}</Link></li>
                            </p>
                        </div>
                    ))}

                </div>


            </>
        );

}

export default Gallery;
