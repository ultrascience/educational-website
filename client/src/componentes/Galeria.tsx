import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import { ArrayGalleryProps, ModelTypeGallery } from "./Tipos";

/**
 * Function that render a gallery of 3D models
 * style: Tailwind CSS Grid 4 rows
 * React Router: Link to each model
 * img: image of the model using arrayBufferToBase64a(image.data)
 * map on image respect props
 */
function Galeria(props: ArrayGalleryProps): JSX.Element {
  const [searchModels, setSearchModels] = useState<ModelTypeGallery[]>(props.gallery);

  return (<>
    <div className="w-screen min-h-screen">
      <div className="h-64">
        <div className="h-4/6">
          <Banner />
        </div>
        <div className="h-2/6">
          <SearchBar
            setSearchModels={setSearchModels}
          />
        </div>
      </div>
      <div className="h-max">
        <ModelsGrid gallery={searchModels} />
      </div>
    </div>

  </>);
}
// return svg button eye view
// function ViewButton(props: { id: string, name: string }): JSX.Element {
//  return (
//  <div className="flex justify-center items-center">
//  <button className="p-2 font-bold text-black hover:text-white bg-white hover:bg-blue-500 rounded">
//  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//

function ModelLink(props: { id: string, name: string }): JSX.Element {

  return (

    <div className="p-2">
      <p className="text-base text-gray-700">
        <Link to={`/3d-models/${props.id}`}>
            <button
              className="p-2 font-bold text-black hover:text-white bg-white hover:bg-blue-500 rounded">
              {props.name}
            </button>
        </Link>
      </p>
    </div >
  );
}

function CardModel(props: { id: string, name: string }): JSX.Element {
  return (

    <div className="p-2 w-72 h-72 hover:rounded-lg hover:scale-105" key={props.id} >
      <div className="overflow-hidden max-w-sm rounded border border-slate-300 divide-y divide-gray-300 shadow-md">
        <img className="w-full bg-zinc-900 " src={"http://localhost:8080/api/rocks/get-image/" + props.id} alt={props.name} />
        <ModelLink id={props.id} name={props.name} />
      </div>
    </div>
  );

}

function ModelsGrid(props: ArrayGalleryProps): JSX.Element {
  return (<>
    <div className="flex flex-wrap justify-start p-4 space-x-3">
      {props.gallery.map(({ _id, name }) => (
        <CardModel id={_id} name={name} key={_id} />
      ))}
    </div>

  </>);
}

export default Galeria;
