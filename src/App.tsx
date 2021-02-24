import { Ref, useRef, useState } from "react";
import "./main.css";

interface Time {
  ms: number;
  s: number;
  m: number;
  h: number;
}

const App = () => {
  const [time, setTime] = useState<Time>({ ms: 0, s: 0, m: 0, h: 0 });
  const [interval, setInt] = useState<any>();
  const [status, setStatus] = useState<boolean>(true);

  var updateMS = time.ms,
    updateS = time.s,
    updateM = time.m,
    updateH = time.h;

  function khan() {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMS === 99) {
      updateS++;
      updateMS = 0;
    }
    updateMS++;
    return setTime({ ms: updateMS, s: updateS, m: updateM, h: updateH });
  }

  const startTimer = () => {
    setInt(setInterval(khan, 10));
    setStatus(false);
  };

  return (
    <div className="mainBox">
      <div className="timerBox">
        <h2 className="timerScreen">
          {time.h < 10 ? "0" + time.h.toString() : time.h}:
          {time.m < 10 ? "0" + time.m.toString() : time.m}:
          {time.s < 10 ? "0" + time.s.toString() : time.s}.
          {time.ms < 10 ? "0" + time.ms.toString() : time.ms}
        </h2>
        <div>
          <button onClick={startTimer} disabled={status ? false : true}>
            Start
          </button>
          <button
            onClick={() => {
              clearInterval(interval);
              setStatus(true);
            }}
            disabled={status ? true : false}
          >
            Stop
          </button>
          <button
            onClick={() => {
              clearInterval(interval);
              setTime({ ms: 0, s: 0, m: 0, h: 0 });
              setStatus(true);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
