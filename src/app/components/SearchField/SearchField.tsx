"use client"; // Add this line

import React, { useState } from "react";
function SearchField({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleChange = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
      if (onSearch) {
        onSearch(value); // Pass the search term to the parent component
      }
    };
  
    return <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..." />;
  }
  

export default SearchField