import { useState } from 'react';
import styles from './styles.module.css';
import 'material-symbols';
import { TIMER_STATES } from './constants';
import Controls from './controls';
import Inputs from './inputs';

export default function Timer() {
  const [timerState, setTimerState] = useState(TIMER_STATES.stopped);
  
  // Ref, State 등의 Hooks는 여기에서 사용하세요.

  const [inputs, setInputs] = useState({
    hours: '',
    minutes: '',
    seconds: '',
  });

  function startTimer() {
    // 코드를 입력하세요.
  }

  function stopTimer() {
    // 코드를 입력하세요.
  }

  function pauseTimer() {
    // 코드를 입력하세요.
  }

  return (
    <main className={styles.main}>
      <Inputs inputs={inputs} setInputs={setInputs} timerState={timerState} />
      <Controls
        timerState={timerState}
        startTimer={startTimer}
        stopTimer={stopTimer}
        pauseTimer={pauseTimer}
      />
    </main>
  );
}
