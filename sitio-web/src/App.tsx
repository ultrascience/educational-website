import Scene3D from './components/Scene3D'
import Gallery from './components/Gallery'
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Gallery />} />
                    <Route path="danburita" element={<Scene3D />} />
                </Routes>
            </div>
        </>
    );
}

export default App
