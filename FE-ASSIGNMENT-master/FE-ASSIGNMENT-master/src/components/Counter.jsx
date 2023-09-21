import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Simple Counter</h1>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Reduce</button>
    </div>
  );
};

export default Counter;
