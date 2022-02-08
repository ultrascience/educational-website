import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { ModelTypeGallery } from './Tipos';

/* 
 * Component to delete items from database
 * @param {string} id - id of item to delete
 */
function Delete() {
  const [models, setModels] = useState<ModelTypeGallery[]>([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/rocks/get-names")
      .then((res) => {
        setModels(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setIsLoaded(true);
      });
  }, []);

  function Table(props: { items: JSX.Element[] }) {
    return (
      <>
        <div className="flex flex-col">
          <div className="overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block py-2 min-w-full align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className='bg-gray-50'>
                    <tr>
                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Name</th>
                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">ID</th>
                      <th scope="col" className="relative py-3 px-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.items}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function onDelete(id: string) {
    axios
      .delete(`http://localhost:8080/api/rocks/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      location.reload();
  }

  // Link to localhost:3000/forms
  function Edit(props:{id: string}){
   return(
     <Link to={`/edit-item/${props.id}`}>
       <button className="py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded">
         Edit
       </button>
      </Link>
   );
  }

  // Funcion que renderiza 
  if (error) {
    return <div>Error loading the json</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const items = [];
    for (const model in models) {
      items.push(
        <tr>
          <td className='py-4 px-6 whitespace-nowrap'>{models[model].name}</td>
          <td className='py-4 px-6 whitespace-nowrap'>{models[model]._id}</td>
          <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <Edit id={models[model]._id}/>
          </td>
          <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => onDelete(models[model]._id)}>Delete</button>
          </td>
        </tr>
      );
    }
    return (
      <>
        <div>
          <div className='text-center'>
            <h1 className='text-lg font-bold'>Modelos</h1>
          </div>
          <Table items={items} />
        </div>
      </>
    );

  }
}
export default Delete;
