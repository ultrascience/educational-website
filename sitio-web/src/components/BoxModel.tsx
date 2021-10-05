import Modelo3D from './Modelo3D';
import Hamburguesa from './Hamburguesa.js'

function BoxModel() {
  return (
    <Modelo3D modelo={<Hamburguesa />} />
  );
  }

export default BoxModel;
