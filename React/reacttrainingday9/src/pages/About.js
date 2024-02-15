import React, { useEffect, useState } from 'react';

function ArryisnotThere() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run on every render
    console.log('Effect ran');
  });

  return (
    <div>
    <h3>     This effect will run on every render
</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}



export default ArryisnotThere;

