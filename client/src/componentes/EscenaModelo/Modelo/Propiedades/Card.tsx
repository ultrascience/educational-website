import React from 'react';

/* Component card with title and description
 * @param {string} title - Title of the card
 * @param {string} description - Description of the card
 * using tailwindcss
 * */
function Card(props: { diccionario: { [key: string]: string } }) {
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
    <div className="flex flex-col p-4 w-full bg-white">
      {inputs}
    </div>
  );
}


export default Card;
