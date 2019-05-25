import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div>
      <h3>Nguyen</h3>
      <p>List of Movies: {movies.movies2.length}</p>
      <p>List of Movies: {movies.movies.length}</p>
    </div>
  );
};

export default Nav;
