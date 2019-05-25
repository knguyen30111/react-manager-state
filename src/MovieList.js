import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div>
      <div className="movies">
        {movies.movies2.map(movie => (
          <Movie name={movie.name} key={movie.id} price={movie.price} />
        ))}
      </div>
      <hr />
      <div className="movies1">
        {movies.movies.map(movie => (
          <Movie name={movie.name} key={movie.id} price={movie.price} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
