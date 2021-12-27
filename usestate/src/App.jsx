
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

    const changeCount = (value) => {
        setCount(count + value)
    }
    const changeMulti = (value) => {
        setCount(count * value)
    }

  return (
    <div className="App">
    <h3>Counter: {count}</h3>
    <button onClick={() => changeCount(1)}>Increment</button>
    <button onClick={() => changeCount(-1)}>Decrement</button>
    <button onClick={() => changeMulti(2)}>Double</button>
    </div>
  );
}

export default App;
