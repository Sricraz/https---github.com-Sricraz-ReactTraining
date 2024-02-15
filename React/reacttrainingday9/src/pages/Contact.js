import React, { useEffect, useState } from 'react';

function Arrayisthere() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run whenever the 'count' state changes
    console.log('Effect ran because count changed:', count);
  }, [count]); // Dependency array with 'count'

  return (
    <div>
    <h4>This effect will run whenever the  state changes Dependency array with 'count'</h4>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Arrayisthere;
