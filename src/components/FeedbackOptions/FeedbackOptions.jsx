import PropTypes from "prop-types";
import Button from "components/Button";
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.group}>
      {options.map(option =>
        (<Button
          key={option}
          text={option}
          handleClick={onLeaveFeedback}
        />))}
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
