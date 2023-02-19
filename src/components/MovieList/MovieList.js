import React from "react";
import { useSelector } from "react-redux";
import OneMovie from "../OneMovie/OneMovie";
import "../../styles/movieList/movieList.css";
import GenreFilter from "../movieFilter/GenreFilter";
import SearchInput from "../SearchInput/SearchInput";

const MovieList = () => {
  const { movieItems, selectedGenre, searchQuery } = useSelector((store) => store.movie);

  const filteredMovies = movieItems.filter(
    (movie) =>
      (selectedGenre ? movie.genres.includes(selectedGenre) : true) &&
      (searchQuery ? movie.name.toLowerCase().includes(searchQuery) : true)
  );

  return (
    <main>
      <div className="top-content">
        <SearchInput />
        <GenreFilter />
      </div>

      <section className="card-container">
        {filteredMovies.map((movie) => (
          <OneMovie {...movie} key={movie.keyId} />
        ))}
      </section>
    </main>
  );
};

export default MovieList;
