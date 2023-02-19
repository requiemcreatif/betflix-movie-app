import React from "react";
import { useSelector } from "react-redux";
import OneMovie from "../OneMovie/OneMovie";
import "../../styles/movieList/movieList.css";
import GenreFilter from "../movieFilter/GenreFilter";

const MovieList = () => {
  const { movieItems, selectedGenre } = useSelector((store) => store.movie);

  const filteredMovies = selectedGenre
    ? movieItems.filter((movie) => movie.genres.includes(selectedGenre))
    : movieItems;

  return (
    <div>
      <GenreFilter />
      <section className="card-container">
        {filteredMovies.map((movie) => (
          <OneMovie {...movie} key={movie.keyId} />
        ))}
      </section>
    </div>
  );
};

export default MovieList;
