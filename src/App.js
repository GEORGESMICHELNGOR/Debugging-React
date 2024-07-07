// src/App.js
import React, { useState } from 'react';
import Counter from './Counter';
import Display from './Display';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>React Debugging Example</h1>
      <Counter count={count} increment={increment} decrement={decrement} />
      <Display count={count} />
    </div>
  );
}

export default App;