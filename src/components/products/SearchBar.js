import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative w-full mb-4">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        onChange={(e) => onSearch(e.target.value)}
      />
      <span className="absolute top-3.5 right-4 text-gray-400 pointer-events-none">
        🔍
      </span>
    </div>
  );
};

export default SearchBar;
