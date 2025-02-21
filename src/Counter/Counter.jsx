
import React, { useState, useEffect } from "react";
import './Counter.css'

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    document.title = formatTime(time);
  }, [time]);

  const formatTime = (seconds) => {
    const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const ss = String(seconds % 60).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>{formatTime(time)}</h1>
      {isRunning ? (
        <button onClick={() => setIsRunning(false)}>Pause</button>
      ) : (
        <button onClick={() => setIsRunning(true)}>Resume</button>
      )}
      <button onClick={() => { setTime(0); setIsRunning(true); }}>Reset</button>
    </div>
  );
};

export default Timer;
