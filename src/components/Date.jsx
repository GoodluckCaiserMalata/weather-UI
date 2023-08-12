import React from "react";

function Datetoday(params) {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div className="datetoday-container">
      <h1>{formattedDate}</h1>
    </div>
  );
}

export default Datetoday;
