import React from "react";
import logo from "../../assets/logo.png";
import SearchMovies from "./SearchMovies";

export default function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo" className="App-logo" />
      <SearchMovies />
    </div>
  );
}
