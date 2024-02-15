import React from 'react';
import useCounter from '../hooks/useCounter';

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Custome Hook Examples</h1>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button class="filter-btn-btn" onClick={increment}>Increment</button>
      <button class="filter-btn-btn" onClick={decrement}>Decrement</button>
      <button class="filter-btn-btn" onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;
