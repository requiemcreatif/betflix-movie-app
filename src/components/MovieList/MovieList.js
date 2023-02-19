import React from "react";
import { useSelector } from "react-redux";
import OneMovie from "../OneMovie/OneMovie";
import "../../styles/movieList/movieList.css";

const MovieList = () => {
  const { movieItems } = useSelector((store) => store.movie);

  return (
    <section className="card-container">
      {movieItems.map((movie) => {
        return <OneMovie {...movie} key={movie.keyId} />;
      })}
    </section>
  );
};

export default MovieList;
