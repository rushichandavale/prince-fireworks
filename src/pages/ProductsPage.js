import React, { useState, useEffect } from "react";
import SearchBar from "../components/products/SearchBar";
import Pagination from "../components/products/Pagination";
import FilterSortBar from "../components/products/FilterSortBar";




const ProductsPage = () => {
  const categoriesData = {
    "Multi Colour Shots": [
      "12 SHOT GEMS",
      "12 SHOT MASKARA",
      "25 SHOT ENJOY",
      "50 SHOT CARNIVAL",
      "30 SHOT WONDER",
      "30 SHOT U.V",
      "50 SHOT BAMBO",
      "50 SHOT U.V",
      "60 SHOT KICK",
      "60 SHOT U.V",
      "100 SHOT WOW",
      "100 SHOT U.V",
      "120 SHOT COCKTAIL",
      "120 SHOT U.V",
      "240 SHOT PRINCE",
      "500 SHOTS",
    ],
    '2"SINGLE SHOT': [
      "DANKA",
      "COLOUR DANKA",
      "ECHO",
      "COLOUR ECHO (2 PCS)",
      "CARNIVAL 3 PCS",
    ],
    "BIG SHOWER": ['3.5" COLOUR PIPE (7 Colour Varients)',
      '4" COLOUR PIPE (10 Colour varients)'],
    "PAPER CONFETTI": ["ELECTRIC PAPER SHOTS(15PCS*4)", "8 PAPER SHOTS"],
    "EVENT ITEM": [
      "52 MM MINES (8 Colour)",
      "29 MM TAIL ( 4 Colour)",
      "FAN CAKE CRACKLING (10 *10)",
    ],
    "Atom Bomb": [
      "BULLET BOMB",
      "SHOLAY",
      "HYDRO",
      "SADDAM",
      "CHAMPION",
      "INDIAN TIGER",
      "INDIAN LION",
      "INDIAN CHAMPION",
    ],
  
    "SPARKLERS": [
      "9CM ALL VARIETY",
      "10 CM ALL VARIETY",
      "12 CM ALL VARIETY",
      "15 CM ALL VARIETY",
      "30 CM ALL VARIETY",
      "50 CM ALL VARIETY",
      "100 CM ALL VARIETY",
      "GHOOMER SPECIAL",
    ],
  
    "FLOWER POTS": [
      "F/P SMALL",
      "F/P BIG",
      "F/P SPECIAL",
      "F/P ASHOKA",
      "F/P COLOUR KOTI",
      "F/P COLOUR KOTI DELUX",
      "F/P MIX ROYAL COMPANY",
      "F/P MIX YUVRAJ COMPANY",
      "F/P MIX COCK BRAND",
    ],
  
    "GROUND CHAKKAR": [
      "G/C BIG (10 PCS)",
      "G/C BIG (25 PCS)",
      "G/C ASHOKA",
      "G/C SPECIAL",
      "G/C DELUX",
      "G/C MIX ROYAL COMPANY",
      "G/C MIX YUVRAJ COMPANY",
      "G/C MIC COCK BRAND",
    ],
  
    "TIM TIM (MATKA ANAR)": [
      "MINIPEARL (5 PCS)",
      "TIM TIM (5 PCS)",
      "KOKO (5 PCS)",
      "LITTLE STAR (10 PCS)",
      "2 IN 1 (10 PCS)",
      "ASHRAFI (5 PCS)",
      "JASMINE (5 PCS)",
      "MAGIC STAR (5 PCS)",
      "GREEN STAR (5 PCS)",
      "RED STAR (5 PCS)",
      "COLOR CHANGING (5 PCS)",
      "DELUXE (4 PCS)",
      "GIFT PACK (4 PCS)",
    ],
    "STRIPPED BIJILI": ["STRIPPED BIJILI 50 PCS",
      "STRIPPED BIJILI 100 PCS",
      "STRIPPED BIJILI 100 PCS GOLD PRINCE",
      "STRIPPED BIJILI 100 PCS",
      "STRIPPED BIJILI 100 PCS",],
  
    "TOTA":["2 INCH KURVI",
  "3.5 INCH TOTA",
  "4 INCH TOTA",
  "5 INCH TOTA",
  "6 INCH TOTA",
  "MIX TOTA ROYAL COMPANY",
  "MIX TOTA YUVRAJ COMPANY",
  "MIX TOTA COCK BRAND",
  "28 CHORSA & GAINT",
  "20/24/28 DELUX",
  "PAPER BOMB",],
  
    "ROCKET": ["BABY ROCKRT",
      "ROCKET BOMB",
      "LUNIK ROCKET",
      "WHISTLING ROCKET",
      "MIX COMPANY ROCKET",
      "MIX ROCKET",],
    "LAAR": ["SMALL BIJILI",
      "1K B IJILI MIX",
      "2 K BIJILI MIX",
      "5K BIJILI MIX",
      "10 K BIJILI MIX"],
  
    "FANCY FOR KIDS": [
      "ROLL",
  "RING CAP",
  "RING CAP",
  "KIT KAT",
  "COLOUR MATCHIES",
  "PEACOCK",
  "BUTTER FLY RED GREEN",
  "PENCIL MIX SIZE",
  "JIL JIL MIX SIZE",
  "PHOTO FLASH",
  "SIREN",
  "7 SHOT",
  "NAG GOLI",
  "ROYAL ALL MIX FANCY",
  "TIGER ALL MIX FANCY",
  "YUVRAJ ALL MIX FANCY",
  "COCK ALL MIX FANCY"
    ],
    "EVENT ITEMS": ["COLD FIRE", 
      "288 SHOT", 
      "388 SHOT",
      "688 Shot",
      "9 SHOT FOGG",
      "9 SHOT FUN CAKE",
      "25 SHOT FOGG",
      "FOGG",
      "PULLING THREAD FOGG"],
    "POP POP Category": ["POP POP",
      "CORESAR MATCHIS",
      "DHAGA"],
  };

  const [categories] = useState(Object.keys(categoriesData));
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("name");
  const itemsPerPage = 9;

 // eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  let items = [];
  if (selectedCategory) {
    items = categoriesData[selectedCategory];
  } else {
    items = categories.flatMap((category) => categoriesData[category]);
  }
  // Apply search filter and sorting
  items = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (sortOption === "name") {
    items.sort();
  }
  setFilteredItems(items);
}, [selectedCategory, searchTerm, sortOption]); // categoriesData is static

  // Pagination Logic
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="lg:w-1/4 bg-white p-4 shadow-md rounded-lg sticky top-4">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Categories</h2>
        <ul className="space-y-2">
          <li
            className={`p-3 rounded-lg cursor-pointer font-medium text-center transition ${
              selectedCategory === null
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => {
              setSelectedCategory(null);
              setCurrentPage(1);
            }}
          >
            All Products ({categories.reduce((sum, cat) => sum + categoriesData[cat].length, 0)})
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={`p-3 flex items-center gap-3 rounded-lg cursor-pointer font-medium transition ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
            >
              <img
                src={`/icons/${category.replace(/\s+/g, "-").toLowerCase()}.png`}
                alt={category}
                className="w-6 h-6"
              />
              {category} ({categoriesData[category].length})
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Search, Filter, and Sort */}
        <div className="bg-white p-4 shadow-md rounded-lg flex flex-col sm:flex-row items-center gap-4">
          <SearchBar onSearch={setSearchTerm} />
          <FilterSortBar onSortChange={setSortOption} />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {paginatedItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow transition-transform hover:shadow-lg hover:scale-105"
            >
              <img
  src={`/images/${item.replace(/\s+/g, "-").toLowerCase()}.jpg`}
  alt={item}
  className="w-full h-40 object-cover rounded-lg"
  onError={(e) => (e.target.src = "/images/placeholder.jpg")}
/>
              <h3 className="mt-2 text-lg font-semibold text-gray-700">
                {item}
              </h3>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {filteredItems.length > 0 ? (
          <Pagination
            currentPage={currentPage}
            totalItems={filteredItems.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        ) : (
          <p className="mt-6 text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;