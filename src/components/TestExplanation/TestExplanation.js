import React from 'react';
import PropTypes from 'prop-types';
import styles from './TestExplanation.module.css';

const TestExplanation = ({ description, onClickNextQuestion }) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <p className={styles.title}>Пояснения:</p>

      <p
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {onClickNextQuestion && (
        <button
          onClick={onClickNextQuestion}
          className={styles.button}
          type="submit"
        >
          Ок, дальше
        </button>
      )}
    </div>
  </div>
);

TestExplanation.propTypes = {
  description: PropTypes.string,
  onClickNextQuestion: PropTypes.func,
};

TestExplanation.defaultProps = {
  description: 'Извини , без объяснения!',
  onClickNextQuestion: () => null,
};

export default TestExplanation;
