import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useSelector((store) =>
    store.movie.movieItems.find((item) => item.id === parseInt(id))
  );

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  const { name, description, genres, rate, length, img } = movie;

  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>{description}</p>
      <p>Genres: {genres.join(", ")}</p>
      <p>Rate: {rate}/10</p>
      <p>Length: {length} minutes</p>
    </div>
  );
};

export default MovieDetail;
