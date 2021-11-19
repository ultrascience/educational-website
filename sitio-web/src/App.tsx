import React from 'react';
import Button from './components/Button'
import Augen from './models3D/Augen'
import Scene3D from './components/Scene3D'
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
  <>
  <div className="h-screen w-screen mx-0">
  <BrowserRouter>
  <Scene3D />
  </BrowserRouter>
  </div>
  </>
  );
}

export default App
