import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedGenre, genres } from "../../redux/features/movie/movieSlice";

const GenreFilter = () => {
  const { selectedGenre } = useSelector((store) => store.movie);
  const dispatch = useDispatch();

  const handleGenreSelect = (event) => {
    const selectedGenre = event.target.value;
    dispatch(setSelectedGenre(selectedGenre === "all" ? null : selectedGenre));
  };

  return (
    <div className="genre-filters">
      <h2>Filter by Genre:</h2>
      <select value={selectedGenre || "all"} onChange={handleGenreSelect}>
        <option value="all">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
