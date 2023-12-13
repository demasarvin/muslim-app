/* eslint-disable react/prop-types */
import axios from "axios";
import { useRef, useState } from "react";
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";

const SearchBar = ({
  setResults,
  setIsSearchVisible,
  onSearch,
  apiUrl,
  customFilter,
  placeholder,
}) => {
  const [inputSearch, setInputSearch] = useState("");
  const searchRef = useRef(null);

  const fetchData = (value) => {
    axios.get(apiUrl).then((res) => {
      const data = res.data.data;
      const results = customFilter(data, value);
      setResults(results);
    });
  };

  const handleChange = (value) => {
    setInputSearch(value);
    fetchData(value);
    onSearch(value);
  };

  const handleClear = () => {
    setInputSearch("");
    setResults([]);
  };
  return (
    <form className="flex items-center">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-lime-700">
          <HiOutlineSearch className="h-4 w-4" />
        </div>
        <input
          id="search"
          ref={searchRef}
          type="text"
          placeholder={placeholder}
          className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 ps-10 text-sm text-gray-900 focus:border-lime-700 focus:outline-none focus:ring-1 focus:ring-lime-700"
          value={inputSearch}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsSearchVisible(true)}
        />
        {inputSearch && (
          <div
            onClick={handleClear}
            className="absolute bottom-3 end-2.5 cursor-pointer text-lime-700"
          >
            <HiOutlineX className="h-4 w-4" />
          </div>
        )}
      </div>
    </form>
  );
};
export default SearchBar;
