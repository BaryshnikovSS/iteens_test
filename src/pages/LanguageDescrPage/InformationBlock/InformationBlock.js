import React from 'react';
import PropTypes from 'prop-types';
import styles from './InformationBlock.module.css';

const InformationBlock = ({ title, description, onStart }) => (
  <div className={styles.secondBlock}>
    <h2 className={styles.secondBlockTitle}>{title}</h2>
    <p
      dangerouslySetInnerHTML={{ __html: description }}
      className={styles.secondBlockDescription}
    />
    <button className={styles.btnStartTest} type="button" onClick={onStart}>
      Начать тест
    </button>
  </div>
);
InformationBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onStart: PropTypes.func.isRequired,
};
export default InformationBlock;
