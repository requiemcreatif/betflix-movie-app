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
      <div className="intro-text">
        <p>
          Welcome to our exciting new movie collection application! We are thrilled to provide you
          with a unique and user-friendly experience that will take your movie-watching to the next
          level. We hope you enjoy our app and find it useful in your movie-watching endeavors.
        </p>
      </div>
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
