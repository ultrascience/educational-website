import React from 'react';

/* Component card with title and description
 * @param {string} title - Title of the card
 * @param {string} description - Description of the card
 * using tailwindcss
 * */
function CardInfo(props: { title: string, description: string }) {
  return (
    <>
      <div className="grow col-auto row-auto p-1 m-2 bg-white rounded-md divide-y divide-solid shadow-2xl">
        <div className="text-base font-bold text-center text-gray-700">
          {props.title}
        </div>
        <div className="p-1 text-xs text-center text-gray-700">
          <p className="subpixel-antialiased">{props.description}</p>
        </div>
      </div>
    </>
  );
}

function CardTitle(props: { title: string }) {
  return (
    <div className="mt-6 text-center">
      <h1 className="text-2xl font-bold text-gray-700">{props.title}</h1>
    </div>
  );
}


export { CardInfo, CardTitle };
