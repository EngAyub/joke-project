import React from "react";

function TwoPart({ setup, delivery }) {
  return (
    <div className="content">
      <h2 className="joke">{setup}</h2>
      <h2 className="punch-line">{delivery}</h2>
    </div>
  );
}

export default TwoPart;
