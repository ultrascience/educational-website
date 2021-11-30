/** 
 * Component: ModelInformation
 * Render the information of the model 
 */
import {NavLink} from "react-router-dom";
import '../styles/modelInformation.css'

const Nav = () => {
    return (
        <div>
            <nav>
                <div className="menu-information">
                    <ul>
                        <li><NavLink to='/basic-information'>Informacion Basica</NavLink></li>
                        <li><NavLink to='/physics'>Fisicas</NavLink></li>
                        <li><NavLink to='/optics'>Opticas</NavLink></li>
                        <li><NavLink to='/crital'>Cristalograficas</NavLink></li>
                        <li><NavLink to='/chemistries'>Quimicas</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
/*
    Function that renders a model information abaut a model respect to model name
 */
function ModelInformation() {
    // Regresa informacion sobre modelos 3D de rocas
    return (
    <>
    <Nav />
    </>
        );
  }

export default ModelInformation;
