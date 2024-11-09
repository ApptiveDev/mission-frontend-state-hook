import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { cloneElement, useEffect, useState } from 'react';

export function TabContainer({ children, onChange, index }) {
  const [indicator, setIndicator] = useState({
    width: 0,
    left: 0,
  });
  // Ref, State 등 Hooks는 이곳에서 선언하세요.

  useEffect(() => {
    // 코드를 입력하세요.
  }, [index]);

  return (
    <div className={styles.container}>
      {children.map((child, i) =>
        cloneElement(child, {
          key: i,
          active: i === index,
          onClick: () => onChange(i),
        }),
      )}
      <span
        className={styles.indicator}
        style={{
          '--width': indicator.width.toString() + 'px',
          '--left': indicator.left.toString() + 'px',
        }}
      />
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export function Tab({ children, active, onClick }) {
  return (
    <button
      className={[styles.tab, active ? styles.active : ''].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};
