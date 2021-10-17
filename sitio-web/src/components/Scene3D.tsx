import BoxModel from './BoxModel' 
function Scene3D() {
 return (
  <div className="grid grid-cols-9 grid-rows-9 gap-4  h-full w-full">
  <div className="col-start-1 col-span-full row-start-1 row-end-6 bg-pink-500"> <BoxModel /></div>
  <div className="col-start-1 col-span-full row-start-6 row-end-9 bg-purple-500"> Botones</div>
  </div>
 ); 
}
export default Scene3D;
