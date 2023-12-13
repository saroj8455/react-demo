/* eslint-disable react/prop-types */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import Counter from './components/Counter';
import ErrorHandeler from './components/ErrorHandeler';
export function ErrorFallback({ error }) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

function Greeting({ subject }) {
  return <div>Hello {subject.toUpperCase()}</div>;
}
function GreetingHello({ subject }) {
  try {
    return <div>Hello {subject.toUpperCase()}</div>;
  } catch (error) {
    return <ErrorFallback error={error} />;
  }
}

function Farewell({ subject }) {
  try {
    return <div>Goodbye {subject.toUpperCase()}</div>;
  } catch (error) {
    return <ErrorFallback error={error} />;
  }
}

function App() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>

      <ErrorHandeler fallback={<>Oh no! Do something!</>}>
        <Greeting subject={'Hi Buddy !'} />
      </ErrorHandeler>

      {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Greeting subject={'Subject to error boundry'} />
          <Farewell subject={'Sample Project '} />
          <Counter />
        </ErrorBoundary> */}
    </>
  );
}

export default App;
