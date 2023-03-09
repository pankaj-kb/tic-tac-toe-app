import React from "react";

function Points({ crossScore, circleScore }) {
  return (
    <div className="scoreRecord">
      <div>
        <h1 className="crossScore">X : {crossScore}</h1>
      </div>
      <div>
        <h1 className="circleScore">O : {circleScore}</h1>
      </div>
    </div>
  );
}

export default Points;
