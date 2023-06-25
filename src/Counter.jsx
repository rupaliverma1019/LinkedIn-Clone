import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Like</button>
      {/* <button onClick={() => setCount(count - 1)}>Dislike</button> */}
    </div>
  );
};

export default Counter;
