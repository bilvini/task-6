import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize state

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px', cursor: 'pointer' }}>
        Increment
      </button>
      <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '10px', cursor: 'pointer' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
