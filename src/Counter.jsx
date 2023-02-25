import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    if (value === "+") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => handleCount("+")}>Incr</button>
      <button onClick={() => handleCount("-")}>Decr</button>
    </>
  );
};
export default Counter;
