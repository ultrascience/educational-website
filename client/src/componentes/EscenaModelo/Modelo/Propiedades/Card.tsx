import React from 'react';

/* Component card with title and description
 * @param {string} title - Title of the card
 * @param {string} description - Description of the card
 * using tailwindcss
 * */
function CardInfo(props: { title: string, description: string }) {
  return (
    <>
      <div className="flex-1 p-1 bg-white ">
        <div className="text-xs font-bold text-left text-gray-700">
          {props.title}
        </div>
        <div className="p-1 text-sm text-left text-gray-700">
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
