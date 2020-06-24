import React, { useState } from "react";
import MultipleCustomHooks from "../examples/MultipleCustomHooks";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? (
        <MultipleCustomHooks />
      ) : (
        <>
          <h1>RealExampleRef</h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              setShow(!show);
            }}
          >
            Mostrar
          </button>
        </>
      )}
    </>
  );
};

export default RealExampleRef;
