import React from "react";
import useCounter from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <button
        onClick={() => decrement(1)}
        className="btn btn-danger"
        style={{ marginRight: 5 }}
      >
        -1
      </button>
      <button
        onClick={reset}
        className="btn btn-warning"
        style={{ marginRight: 5 }}
      >
        Reset
      </button>
      <button
        onClick={() => increment(1)}
        className="btn btn-success"
        style={{ marginRight: 5 }}
      >
        +1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
