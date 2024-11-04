import React from 'react';
import './searchInput.css'; 
import searchBtn from '../../assets/searchBtn.png'



function SearchInput() {
  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <img src={searchBtn} alt="searchIcon" className="search-icon" />
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
}

export default SearchInput;
