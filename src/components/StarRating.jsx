import React, { useState } from "react";

const StarRating = () => {
  const arr = [1, 2, 3, 4, 5];
  const [hover, setHover] = useState(2);
  // function clickHandler(s) {
  //   setHover(s);
  // }
  return (
    <>
      <h1>STAR RATING</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100px",
        }}
      >
        {arr.map((star) => (
          <div
            style={{
              padding: "4px",
              cursor: "pointer",
              default:{hover},
              color: star <= hover ? "yellow" : "",
            }}
            onMouseOver={() => setHover(star)}
            onMouseLeave={() => setHover(2)}
          >
            {" "}
            ★
          </div>
        ))}
      </div>
    </>
  );
};

export default StarRating;
