import React from "react";
import logo from "../../assets/logo.png";
import SearchMovies from "./SearchMovies";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">On Move</h1>
      <img src={logo} alt="logo" className="App-logo" />
      <SearchMovies />
    </div>
  );
}
