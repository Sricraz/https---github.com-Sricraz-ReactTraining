import React, { useEffect, useState } from 'react';

function Arrayisempty() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run only once after the initial render
    console.log('Effect ran once after initial render');
  }, []); // Empty dependency array

  return (
    <div>
    <h4>This effect will run only once after the initial render</h4>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Arrayisempty;
