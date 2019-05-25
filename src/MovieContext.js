import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Game of Thrones",
      price: "10$",
      id: 1
    },
    {
      name: "Harry Poster",
      price: "19$",
      id: 2
    }
  ]);
  const [movies2, setMovies2] = useState([
    {
      name: "2 of dsa",
      price: "2$",
      id: 1
    },
    {
      name: "2 dsa",
      price: "19$",
      id: 2
    },
    {
      name: "Inception",
      price: "29$",
      id: 3
    }
  ]);
  const mapState = (movies, movies2) => {
    return {
      movies: movies,
      movies2: movies2
    };
  };
  const mapProps = (setMovies, setMovies2) => {
    return {
      setMovies: setMovies,
      setMovies2: setMovies2
    };
  };
  return (
    <MovieContext.Provider
      value={[mapState(movies, movies2), mapProps(setMovies, setMovies2)]}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
