import React, { useEffect, useState } from "react";

const Square = () => {
  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  const [squareColor, setSquareColor] = useState(
    `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
  );

  let squareStyles = {
    backgroundColor: squareColor,
  };

  useEffect(() => {
    setInterval(
      () =>
        setSquareColor(
          `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
        ),
      1000
    );
  }, []);
  return <div className="square" style={squareStyles}></div>;
};

export default Square;
