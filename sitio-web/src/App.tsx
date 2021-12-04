import Scene3D from './components/Scene3D'
import Gallery from './components/Gallery'
import * as React from "react";
import {Routes, Route, Link} from "react-router-dom"
import Physical from './components/properties/Physical';
import Chemical from './components/properties/Chemical';
import Optical from './components/properties/Optical';
import Crystallographic from './components/properties/Crystallographic';


function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Gallery/>}/>
                        <Route path="danburita" element={<Scene3D nombre="augen" />}/>
                        <Route path="danburita/*" element={<Physical information="hola"/>}/>
                        <Route path="augen" element={<Scene3D  nombre="augen"/>}/>
                    {/*<Route path="magnetita" element={<Scene3D/>}/>*/}
                    {/*<Route path="andesita" element={<Scene3D/>}/>*/}
                    {/*<Route path="goethita" element={<Scene3D/>}/>*/}
                    {/*<Route path="wulfenita" element={<Scene3D/>}/>*/}

                    {/*<Route path=":chemical" element={<Chemical/>}/>*/}
                    {/*<Route path=":optical" element={<Optical/>}/>*/}
                    {/*<Route path=":optical" element={<Crystallographic/>}/>*/}
                </Routes>
            </div>
        </>
    );
}

export default App
