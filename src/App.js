import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div data-test="app-component">
      <h1 data-test="display-component">
        Count: <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button data-test="decrement-button" onClick={() => setCount(count - 1)}>
        Decrement Counter
      </button>
    </div>
  );
}

export default App;
