import Modelo3D from './Modelo3D';
import Augen from './Augen'

function BoxModel() {
  return (
  <>
  <div className="relative bg-pink-500 h-full w-full">
    <Modelo3D modelo={<Augen />} />
    </div>
    </>
  );
  }

export default BoxModel;
