import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  function decrement() {
    count === 0 ? setError(true) : setCount(count - 1);
  }

  function increment() {
    setError(false);
    setCount(count + 1);
  }

  return (
    <div data-test="app-component">
      <h1 data-test="display-component">
        Count: <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={() => increment()}>
        Increment
      </button>
      <button data-test="decrement-button" onClick={() => decrement()}>
        Decrement Counter
      </button>
      {error && <h2 error={`${error}`}>Can't go below 0</h2>}
    </div>
  );
}

export default App;
