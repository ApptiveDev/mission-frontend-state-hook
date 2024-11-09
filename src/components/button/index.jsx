import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Button({ variant = 'primary', children, ...props }) {
  return (
    <button className={[styles.button, styles[variant]].join(' ')} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
};
