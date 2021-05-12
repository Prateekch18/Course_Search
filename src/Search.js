import React, { useState } from "react";
import SearchList from "./SearchList";
import './Search.css'
import './Card.css'

function Search({ details }) {
  let [searchedField, setSearchedField] = useState("");
  let [bool, setBool] = useState(false);

  

  const handleChange = (e) => {
    setBool(false);
    setSearchedField(e.target.value);
  };
  
  let filteredBrands;
  if (!bool) {
    filteredBrands = details.filter((brand) => {
      return brand.name.toLowerCase().includes(searchedField.toLowerCase());
    });
  } else {
    filteredBrands = details.filter((brand) => {
      return brand.name
        .toLowerCase()
        .charAt(0)
        .includes(searchedField.toLowerCase());
    });
  }

  

  function searchList() {
    return <SearchList filteredBrands={filteredBrands} />;
  }

  return (
    <div>
      <div className="search">
        <h2 className="right__title">Search Courses</h2>
        <input
            id="searchTxt"
            className="text"
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            aria-label="Search" 
            name="q"
          />
        
      </div>
      <div className="list">{searchList()}</div>
    </div>                    
      
  );
}

export default Search;
