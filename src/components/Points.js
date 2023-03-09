import React from "react";

function Points({ crossScore, circleScore }) {
  return (
    <div>
      <div className="Cross Score">
        <h1>Cross Score : {crossScore}</h1>
      </div>
      <div className="Circle Score"></div>
      <h1>Cicrcle Score : {circleScore}</h1>
    </div>
  );
}

export default Points;
