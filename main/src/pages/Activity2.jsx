import React, { useState, useEffect } from "react";
import "./Activity2.css"; 

const Activity2 = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("Start counting!");

  useEffect(() => {
    if (count === 0) {
      setStatus("Back at the start.");
    } else if (count > 20) {
      setStatus("High score! Count is over 20.");
    } else if (count < 0) {
      setStatus("Going into the negatives!");
    } else {
      setStatus("Keep going...");
    }
  }, [count]); 

  return (
    <div className="activity-container">
      <h1>Activity 2: Hooks & Logic</h1>
      
      <div className="counter-card">
        <h2>Current Count: {count}</h2>
        <p className="status-text">{status}</p>

        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>
          <button className="reset-btn" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Activity2;