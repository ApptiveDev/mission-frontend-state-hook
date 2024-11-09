import PropTypes from 'prop-types';
import { TIMER_STATES } from './constants';
import styles from './styles.module.css';
import Input from '../../components/input';

export default function Inputs({ inputs, setInputs, timerState }) {
  return (
    <div className={styles.inputs} data-active={timerState === TIMER_STATES.running}>
        <Input
          name="hours"
          value={inputs.hours}
          min={0}
          max={99}
          tabIndex={1}
          onChange={(e) => setInputs({ ...inputs, hours: e.target.value })}
          disabled={timerState !== TIMER_STATES.stopped}
        />
        <span className={styles.divider}>:</span>
        <Input
          name="minutes"
          value={inputs.minutes}
          min={0}
          max={59}
          tabIndex={2}
          onChange={(e) => setInputs({ ...inputs, minutes: e.target.value })}
          disabled={timerState !== TIMER_STATES.stopped}
        />
        <span className={styles.divider}>:</span>
        <Input
          name="seconds"
          value={inputs.seconds}
          min={0}
          max={59}
          tabIndex={3}
          onChange={(e) => setInputs({ ...inputs, seconds: e.target.value })}
          disabled={timerState !== TIMER_STATES.stopped}
        />
      </div>
  )
}

Inputs.propTypes = {
  inputs: PropTypes.shape({
    hours: PropTypes.string,
    minutes: PropTypes.string,
    seconds: PropTypes.string,
  }).isRequired,
  setInputs: PropTypes.func.isRequired,
  timerState: PropTypes.oneOf(Object.values(TIMER_STATES)).isRequired,
};
