
import React, { useState, useEffect } from 'react';
import './ReactCounter.css';
const StartNum=0;
export default function TitleCount() {
  const [counter, setCounter] = useState(StartNum);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
 //decrease counter
const decrease = () => {
  // if (counter > 0) {
    setCounter(count => count - 1);
  // }
};
 
  //reset counter 
  const reset = () =>{
    setCounter(StartNum)
  }
 
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">

        <button className="btn control__btn" onClick={increase}>+</button>
        <button className="btn control__btn" onClick={decrease}>-</button>
        <button className="btn reset" onClick={reset}>Reset</button>

      </div>
    </div>
  );
}
  
// export default TitleCount;