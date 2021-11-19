import {NavLink} from 'react-router-dom';

const Nav =()=>{
    return (
     <div>
         <nav>
             <div>
               <ul>
                <li><NavLink to = '/physics'>Fisicas</NavLink></li>
                <li><NavLink to = '/optics'>Opticas</NavLink></li>
                <li><NavLink to = '/crital'>Cristalograficas</NavLink></li>
                <li><NavLink to = '/chemistries'>Quimicas</NavLink></li>
                <li><NavLink to = '/basic-information'>Informacion Basica</NavLink></li>
              </ul>
             </div>
         </nav>
     </div>
 )
}

export default Nav
