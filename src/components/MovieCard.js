import React from "react";

// movie data images references
const baseImageUrl = "https://image.tmdb.org/t/p/";
const imageSize = "w185_and_h278_bestv2";

export default function movieCard({ movie }) {
  return (
    <div className="card">
      <p className="card__headline--title">{movie.title}</p>
      <img
        className="card--image"
        src={`${baseImageUrl}${imageSize}${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p className="card--date">
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p className="card--rating">
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  );
}
