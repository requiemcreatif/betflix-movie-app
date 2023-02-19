import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/features/movie/movieSlice";
import "../../styles/searchInput/searchInput.css";

const SearchInput = () => {
  const { searchQuery } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value.toLowerCase()));
  };

  console.log(searchQuery);
  //console.log(state);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies by title"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
