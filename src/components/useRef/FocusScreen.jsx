import React, { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };
  return (
    <>
      <div>
        <h1>Focus Screen</h1>

        <input
          type="text"
          ref={inputRef}
          className="form-control"
          placeholder="Tu nombre"
        />

        <button className="btn btn-outline-primary mt-3" onClick={handleClick}>
          Focus
        </button>
      </div>
    </>
  );
};

export default FocusScreen;
