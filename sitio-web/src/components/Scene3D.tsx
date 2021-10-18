/**
 * Componente que sirve para modelar la Escena del modelo 3D y las caja de botones
 * Utilizando CSS Grid.
 */
import Button from './Button'
import Modelo3D from "./Modelo3D";
import Augen from "./Augen";
import "../index.css"
function Scene3D() {
 return (
  <div className="grid-scene">
  <div className="grid-model">
   <Modelo3D modelo={<Augen />} />
  </div>
  <div className="grid-buttons">
  <div className="flex gap-8">
      <Button title="Propiedades fisicas"/>
      <Button title="Propiedades quimicas"/>
      <Button title="Propiedades biologicas"/>
  </div>
  </div>
  </div>
 ); 
}
export default Scene3D;
