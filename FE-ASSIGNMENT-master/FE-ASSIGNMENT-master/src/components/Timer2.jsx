import React, { useState, useEffect } from "react";

const Timer2 = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    if ((minutes > 0 || seconds > 0) && !isRunning) {
      setTimer(
        setInterval(() => {
          if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            setIsRunning(false);
          } else if (seconds === 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            setSeconds(seconds - 1);
          }
        }, 1000)
      );
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      clearInterval(timer);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    if (!isRunning) {
      clearInterval(timer);
      setMinutes(0);
      setSeconds(0);
    }
  };

  useEffect(() => {
    if (isRunning && minutes === 0 && seconds === 0) {
      clearInterval(timer);
      setIsRunning(false);
    }
  }, [minutes, seconds, isRunning, timer]);

  return (
    <div>
      <h1>Timer App</h1>
      <div className="timer">
        <div className="input-fields">
          <input
            type="number"
            placeholder="Minutes"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
            disabled={isRunning}
          />
          <span>:</span>
          <input
            type="number"
            placeholder="Seconds"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value, 10))}
            disabled={isRunning}
          />
        </div>
        <div className="controls">
          <button
            onClick={handleStart}
            disabled={isRunning || (minutes === 0 && seconds === 0)}
          >
            Start
          </button>
          <button onClick={handleStop} disabled={!isRunning}>
            Stop
          </button>
          <button
            onClick={handleReset}
            disabled={isRunning || (minutes === 0 && seconds === 0)}
          >
            Reset
          </button>
        </div>
        <div className="display">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};

export default Timer2;
