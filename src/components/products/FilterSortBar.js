import React from "react";

const FilterSortBar = ({ onSortChange }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg shadow mb-4">
      
      <select
        className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="name">Sort by Name</option>
        <option value="category">Sort by Category</option>
      </select>
    </div>
  );
};

export default FilterSortBar;
