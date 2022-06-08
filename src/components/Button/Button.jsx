import PropTypes from "prop-types";
import styles from './Button.module.css';

export default function Button({ text, handleClick }) {
  return (
    <button
      className={styles.button}
      type="button"
      name={text}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
  };
