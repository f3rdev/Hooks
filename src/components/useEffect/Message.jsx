import React, { useState, useEffect } from "react";

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  const mouseMove = (e) => {
    const coords = { x: e.x, y: e.y };
    setCoords(coords);
    console.log(":D");
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <h3>Mensaje</h3>
      <p>
        x: {x} y: {y}
      </p>
    </>
  );
};

export default Message;
