import React, { useState } from 'react'

const HelloWorld = props => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0)
  
    return (
      <React.Fragment>
        <p>Count is {count}</p>
        <button onClick={() => setCount(count + 1)}>
          +
        </button>
        <button onClick={() => setCount(count - 1)}>
          -
        </button>
      </React.Fragment>
    );
  }

export default HelloWorld