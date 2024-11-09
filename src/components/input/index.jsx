import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { capitalize } from '../../utilities/capitalize';

export default function Input({
  max,
  min,
  value,
  onChange: onChangeProp,
  type = 'text',
  tabIndex,
  name,
  ...props
}) {
  const maxLength = max?.toString().length ?? 2;

  function onChange(e) {
    const value = e.target.value ?? '';
    const intValue = parseInt(value, 10);

    if (value !== '' && Number.isNaN(intValue)) {
      return;
    }

    if (min !== undefined && intValue < min) {
      return;
    }

    if (max !== undefined && intValue > max) {
      return;
    }

    onChangeProp(e);

    if (value.length >= maxLength) {
      const nextTabIndex = tabIndex + 1;
      const nextInput = document.querySelector(`[tabindex="${nextTabIndex}"]`);

      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  function onBlur(e) {
    const intValue = parseInt(e.target.value ?? '', 10);
    const intValueLength = intValue.toString().length;

    if (intValue > 0) {
      const indent =
        intValueLength < maxLength
          ? '0'.repeat(maxLength - intValueLength)
          : '';
      e.target.value = indent + intValue.toString();
    }

    onChangeProp(e);
  }

  function onFocus(e) {
    e.preventDefault();
    e.target.setSelectionRange(0, e.target.value.length);
  }

  return (
    <span className={styles.container}>
      <label htmlFor={name}>{capitalize(name)}</label>
      <input
        onFocus={onFocus}
        onMouseDown={onFocus}
        onMouseUp={(e) => e.preventDefault()}
        placeholder={'0'.repeat(maxLength)}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        tabIndex={tabIndex}
        {...props}
      />
    </span>
  );
}

Input.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  tabIndex: PropTypes.number,
};
