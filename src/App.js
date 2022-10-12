import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const [isNumEven, setNumEven] = useState(true);

  const incNum = () => {
    setNum(num + 1);
  }
  const decNum = () => {
    setNum(num - 1);
  }

  useEffect(() => {
    const checknum = async () => {
      if (num % 2 === 0) {
        setNumEven(true);
      } else {
        setNumEven(false);
      }
    }
    checknum();
  }, [num]);

  return (
    <div className="wrapper">
      <div className='content'>
        <h1 className='text-center'>{num}</h1>
        <div className='btn-controls'>
          <button onClick={() => incNum()}>Increment</button>
          <button onClick={() => decNum()}>Decrement</button>
        </div>
        <h2 className='text-center'>{isNumEven ? 'Even' : 'Odd'}</h2>
      </div>
    </div>
  );
}

export default App;
