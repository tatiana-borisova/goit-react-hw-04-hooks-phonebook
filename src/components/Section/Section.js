import PropTypes from 'prop-types';
import styles from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}

Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
