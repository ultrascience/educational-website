import React from 'react';
import './../../../../estilos/index.css';
type Props = {
  diccionario: {
    [key: string]: string;
  };
  titulo: string;
  color: string;
};

/* Component card with title and description
 * @param {string} title - Title of the card
 * @param {string} description - Description of the card
 * using tailwindcss
 * */
function Card(props: Props) {
  const inputs = [];
  for (const key in props.diccionario) {
    inputs.push(
      <div className="flex-1 py-4 px-1">
        <div className="text-sm font-bold text-left text-gray-700">
          {key}
        </div>
        <div className="text-sm text-left text-gray-700">
          {props.diccionario[key]}
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="space-y-2 space-x-2 rounded shadow-lg">
        <div className={`bg-${props.color}-500 text-white p-2 my-2 text-xl font-bold text-center rounded`}>
          {"Propiedades " + props.titulo}
        </div><div className="flex flex-col p-4 w-full divide-y divide-gray-200">
          {inputs}
        </div>
      </div></>
  );
}


export default Card;
