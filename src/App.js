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
    <div className="app-component" data-test="app-component">
      <div className="container">
        <h1 data-test="display-component">
          Count:&nbsp;<span data-test="count">{count}</span>
        </h1>
        <div className="button-container">
          <button
            className="button button--blue"
            data-test="increment-button"
            onClick={() => increment()}
          >
            Increment
          </button>
          <button
            className="button button--purple"
            data-test="decrement-button"
            onClick={() => decrement()}
          >
            Decrement
          </button>
        </div>

        {error && (
          <h2 style={{ color: "red" }} error={`${error}`}>
            Can't go below 0
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
