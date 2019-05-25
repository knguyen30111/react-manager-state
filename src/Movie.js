import React from "react";

const Movie = ({ name, price, id }) => {
  return (
    <div key={id}>
      <h1>{name}</h1>
      <h2>{price}</h2>
    </div>
  );
};

export default Movie;
