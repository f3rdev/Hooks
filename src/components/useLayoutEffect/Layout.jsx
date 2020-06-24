import React, { useLayoutEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";
import "./layout.css";

const Layout = () => {
  const { state: counter, increment } = useCounter(1);
  const [boxSize, setBoxSize] = useState({});

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>LayoutEffect</h1>

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button onClick={() => increment(1)} className="btn btn-primary">
        Siguiente frase
      </button>
    </>
  );
};

export default Layout;
