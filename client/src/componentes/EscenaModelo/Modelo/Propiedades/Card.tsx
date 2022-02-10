import React from 'react';

type Props = {
  diccionario: {
    [key: string]: string;
  };
  titulo: string;
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
      <div className="flex-1 p-2">
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
    <div className="flex flex-col p-4 w-full bg-white divide-y divide-gray-300">
      <div className='text-xl font-bold text-center text-gray-700'>
        {"Propiedades " + props.titulo}
      </div>
      {inputs}
    </div>
  );
}


export default Card;
