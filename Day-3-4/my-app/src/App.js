import React, { useState } from 'react';
import Header from '../src/components/Header.js';

const App = () => {
  const [count, setCount] = useState(0)
  const Increment = () =>{
    setCount(count + 1);
  }
  const Decrement = () =>{
    setCount(count - 1);
  }
  return (
    <>
      <Header name="Ashmit" />
      <h1>Count: {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>

    </>
  )
}

export default App