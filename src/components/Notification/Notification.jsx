import PropTypes from "prop-types";
import styles from "./Notification.module.css"

export default function Notification(props) {
  const { message } = props;
  return (
    <p className={styles.text}>{message}</p>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
