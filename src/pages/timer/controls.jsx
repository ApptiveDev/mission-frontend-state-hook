import PropTypes from 'prop-types';
import Button from '../../components/button';
import { TIMER_STATES } from './constants';
import styles from './styles.module.css';

export default function Controls({
  timerState,
  startTimer,
  stopTimer,
  pauseTimer,
}) {
  return (
    <div className={[styles.buttons, styles[timerState]].join(' ')}>
      <Button
        onClick={() => {
          if (timerState === TIMER_STATES.stopped) {
            startTimer();
          } else {
            stopTimer();
          }
        }}
      >
        {timerState === TIMER_STATES.stopped ? (
          <span className="material-symbols-outlined">play_arrow</span>
        ) : (
          <span className="material-symbols-outlined">stop</span>
        )}
      </Button>
      <Button
        onClick={() => {
          if (timerState === TIMER_STATES.running) {
            pauseTimer();
          } else if (timerState === TIMER_STATES.paused) {
            startTimer();
          }
        }}
        variant="secondary"
      >
        {timerState === TIMER_STATES.running ? (
          <span className="material-symbols-outlined">pause</span>
        ) : (
          <span className="material-symbols-outlined">play_arrow</span>
        )}
      </Button>
    </div>
  );
}

Controls.propTypes = {
  timerState: PropTypes.oneOf(Object.values(TIMER_STATES)).isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  pauseTimer: PropTypes.func.isRequired,
};
