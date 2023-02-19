import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../../styles/movieDetail/movieDetails.css";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useSelector((store) =>
    store.movie.movieItems.find((item) => item.id === parseInt(id))
  );

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  const { name, description, genres, rate, length, img } = movie;

  const genreButtons = genres.map((genre, index) => <button key={index}>{genre}</button>);

  return (
    <section className="wrapper">
      <div className="movie-content">
        <div className="image-wrapper">
          <img src={img} alt={name} />
        </div>
        <div className="movie-footer-content">
          <h1>{name}</h1>
          <p className="movie-description">{description}</p>
          <div className="genre-buttons">{genreButtons}</div>
          <div className="rate">
            <p>Rate: {rate}/10</p>
            <p>Length: {length} </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
