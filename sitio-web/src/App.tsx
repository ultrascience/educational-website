import Scene3D from './components/Scene3D'
import Gallery from './components/Gallery'
import * as React from "react";
import Physical from './components/properties/Physical';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';
import Chemical from './components/properties/Chemical';
import Optical from './components/properties/Optical';
import Crystallographic from './components/properties/Crystallographic';

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}
function App() {
    return (
        <>
            <div className="App">
            </div>
 <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/danburita" element={<Scene3D nombre="danburita" />} />
      </Routes>
    </Router>
        </>
    );
}

export default App
