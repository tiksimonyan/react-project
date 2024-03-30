import React, { useState } from "react";
import "./Search.css"; 
import search from "../.././images/search.svg";

function Search({onChange}) {
  const [clickedSearch, setclickedSearch] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); 

  const handleSearchClick = () => {
    setclickedSearch(!clickedSearch);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); 
    onChange(query);
  };

  
  return (
    <div className="search">
      <input type="search" className={clickedSearch ? "active" : ""} value={searchQuery} onChange={handleInputChange} placeholder="Search..."/>
      <img src={search} alt="Search" onClick={handleSearchClick} />
    </div>
  );
}

export default Search;
