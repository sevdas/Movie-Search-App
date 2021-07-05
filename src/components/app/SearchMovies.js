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
      // console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  // console.log("movies", movies);

  return (
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
  );
}
