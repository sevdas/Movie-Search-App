import React, { useState } from "react";

export default function SearchMovies() {
  //Input query
  const [query, setQuery] = useState("");
  //Update movie state
  const [movies, setMovies] = useState([]);

  const handleEvent = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const searchMovies = async (event) => {
    event.preventDefault();
    console.log("submitting");

    const REACT_APP_MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

    const url = `https://api.themoviedb.org/3/search/movie/?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  // movie data images references
  const baseImageUrl = "https://image.tmdb.org/t/p/";
  const imageSize = "w185_and_h278_bestv2";

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={handleEvent}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((moviePoster) => moviePoster.poster_path)
          .map((movie) => {
            return (
              <div className="card" key={movie.id}>
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
          })}
      </div>
    </>
  );
}
