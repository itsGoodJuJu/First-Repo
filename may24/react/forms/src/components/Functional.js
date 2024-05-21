import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


// building a counter function component
export default function Functional() {
    const [count, setCount] = useState(0);
    
    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

  return (
    <>
        <h1>Functional-Based Component: Counter</h1>
        <p>Count: {count}</p>
        <Button variant="outline-primary" onClick={increase}>Increase</Button>
        {/* <button onClick={increase}> Increase </button> */}
        <Button variant="outline-dark" onClick={decrease}>Decrease</Button>
        {/* <button onClick={decrease}> Decrease </button> */}
    </>
  )
}
