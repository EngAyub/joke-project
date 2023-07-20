import React from "react";

function SingleJoke({ joke }) {
  return (
    <div className="content">
      <h2 className="joke">{joke}</h2>
    </div>
  );
}

export default SingleJoke;
