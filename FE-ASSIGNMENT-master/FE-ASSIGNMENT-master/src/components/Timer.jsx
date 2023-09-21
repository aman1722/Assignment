import React, { useState, useEffect } from "react";

const Timer = () => {
  const [duration, setDuration] = useState(0);
  const [timer, setTimer] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    if (duration > 0 && !isRunning) {
      setTimer(
        setInterval(() => {
          setCurrentTime((prevTime) => prevTime + 1);
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
      setDuration(0);
      setCurrentTime(0);
    }
  };

  useEffect(() => {
    if (isRunning && currentTime >= duration) {
      clearInterval(timer);
      setIsRunning(false);
    }
  }, [currentTime, duration, isRunning, timer]);

  return (
    <div>
      <h1>Timer App</h1>
      <div className="timer">
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value, 10))}
          placeholder="Enter duration (seconds)"
          disabled={isRunning}
        />
        <div className="controls">
          <button onClick={handleStart} disabled={isRunning || duration <= 0}>
            Start
          </button>
          <button onClick={handleStop} disabled={!isRunning}>
            Stop
          </button>
          <button onClick={handleReset} disabled={isRunning || duration === 0}>
            Reset
          </button>
        </div>
        <div className="display">{currentTime} s</div>
      </div>
    </div>
  );
};

export default Timer;

// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>FrontEnd Assigments</h1>
//     </div>
//   );
// }

// export default App;
