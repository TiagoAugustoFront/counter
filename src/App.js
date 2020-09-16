import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  if(count<0){
    setCount(0)
  }

  return (
    <div className="container">
      <h1 className="counter">{count}</h1>
      <div className="btn-container">
        <button className="btn btn-more" onClick={() => setCount(count + 1)}>+</button>
        <button className="btn btn-less" onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div>
          <button className="btn btn-reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
