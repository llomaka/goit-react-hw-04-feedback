import PropTypes from "prop-types";
import styles from "./Section.module.css"

export default function Section(props) {
  const { title, children } = props;
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }
