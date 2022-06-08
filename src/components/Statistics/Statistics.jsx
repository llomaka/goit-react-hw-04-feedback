import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Good: <span className={styles.good}>{good}</span></li>
      <li className={styles.item}>Neutral: <span className={styles.neutral}>{neutral}</span></li>
      <li className={styles.item}>Bad: <span className={styles.bad}>{bad}</span></li>
      <li className={styles.item}>Total: {total}</li>
      <li className={styles.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
