import React, { useState } from 'react';
import { ErrorFallback } from '../App';

export default function Counter() {
  const [count, setCount] = useState(0);

  try {
    return (
      <div>
        <h1>Vite + React</h1>
        <div className='card'>
          <button
            onClick={() => {
              if (count === 4) {
                debugger;
                throw new Error('User Simulate Error by : Tom Dech');
              }
              setCount((count) => count + 1);
            }}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <ErrorFallback error={error} />;
  }
}
