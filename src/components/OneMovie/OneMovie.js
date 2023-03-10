import React from "react";
import { Link } from "react-router-dom";
import "../../styles/oneMovie/oneMovie.css";

const OneMovie = ({ id, keyId, name, description, genres, rate, length, img }) => {
  return (
    <article>
      <Link to={`/movie/${id}`} key={keyId}>
        <div className="card">
          <div className="card-header">
            <img src={img} alt={name} />
          </div>
          <div className="card-footer">
            <h2 className="card-title">{name}</h2>
            <button>Read more</button>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default OneMovie;
