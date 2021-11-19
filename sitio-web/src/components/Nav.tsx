import {NavLink} from 'react-router-dom';

const Nav =()=>{
    return (
     <div>
         <nav>
             <div>
               <ul>
                <li><NavLink to = '/home'>Fisicas</NavLink></li>
                <li><NavLink to = '/about'>Opticas</NavLink></li>
                <li><NavLink to = '/contact'>Cristalograficas</NavLink></li>
              </ul>
             </div>
         </nav>
     </div>
 )
}

export default Nav
