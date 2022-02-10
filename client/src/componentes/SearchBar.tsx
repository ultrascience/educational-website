import axios from 'axios';
import React from 'react';
import { ModelTypeGallery } from './Tipos';

type Props = {
  setSearchModels: (models: ModelTypeGallery[]) => void;
};


function SearchBar(props: Props) {
  const [value, setValue] = React.useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case 'search':
        setValue(event.target.value);
        GetSearch();
        break;
      default:
        break;
    }
  }


  function onSearch(event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>) {
    event.preventDefault();
    console.log("El valor es: ", value);
    GetSearch();
  }

  function GetSearch() {

    axios.get(`http://localhost:8080/api/rocks/get-names-regex/${value}`)
      .then(res => {
        console.log("El resultado es: ", res.data);
        props.setSearchModels(res.data);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      GetSearch();
    }
  }

  return (
    <div className="flex relative mx-auto w-1/4 max-w-md">
      <input className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg " type="search" name="search" placeholder="Search" onChange={handleChange} onKeyDown={handleKeyDown} />
      <button type="submit" className="absolute top-3 right-2 mr-4" onClick={onSearch}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
