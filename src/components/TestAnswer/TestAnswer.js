import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TestAnswer.module.css';
import happyCat1 from '../../assets/img/cat/happyCat1.jpg';
import happyCat2 from '../../assets/img/cat/happyCat2.png';
import pensiveСat1 from '../../assets/img/cat/pensiveСat1.jpg';
import pensiveСat2 from '../../assets/img/cat/pensiveCat2.png';
import pensiveСat3 from '../../assets/img/cat/pensiveCat3.png';

const happyCatArray = [happyCat1, happyCat2];
const pensiveCatArray = [pensiveСat1, pensiveСat2, pensiveСat3];

const getRandomInt = max => Math.floor(Math.random() * max);

const cx = classNames.bind(styles);
let labelClassNames;
let disabled;

const TestAnswer = ({
  questions,
  resultAnswer,
  onClickAnswer,
  onChangeUserAnswer,
  onClickSkipQuestion,
}) => (
  <>
    <div className={styles.container}>
      <div className={styles.wrapperImgInput}>
        <div className={styles.inputWrapper}>
          {questions.map((question, index) => {
            if (resultAnswer) {
              const currentIndex = index + 1;
              labelClassNames = resultAnswer.userAnswerCorrectly
                ? cx({
                    label: true,
                    labelCorrect: currentIndex === resultAnswer.rightAnswer,
                  })
                : cx({
                    label: true,
                    labelCorrect: currentIndex === resultAnswer.rightAnswer,
                    labelIncorrect: currentIndex === resultAnswer.userAnswer,
                  });
              disabled = true;
            } else {
              labelClassNames = cx({
                label: true,
              });
              disabled = false;
            }

            return (
              <label
                key={question._id}
                htmlFor={question._id}
                className={labelClassNames}
              >
                <input
                  disabled={disabled}
                  id={question._id}
                  className={styles.input}
                  name="answer"
                  type="radio"
                  data-number={question.answerNumber}
                  onChange={onChangeUserAnswer}
                />
                <span
                  dangerouslySetInnerHTML={{ __html: question.answerText }}
                  className={styles.questionText}
                />
              </label>
            );
          })}
        </div>
        {resultAnswer &&
          (resultAnswer.userAnswerCorrectly ? (
            <img
              className={styles.img}
              alt="cat"
              src={happyCatArray[getRandomInt(2)]}
            />
          ) : (
            <img
              className={styles.img}
              alt="cat"
              src={pensiveCatArray[getRandomInt(3)]}
            />
          ))}
      </div>

      {!resultAnswer && (
        <div className={styles.tabletContainerButton}>
          <div className={styles.buttonContainer}>
            <button
              onClick={onClickAnswer}
              type="submit"
              className={styles.buttonConfirm}
            >
              Ответить
            </button>
            <button
              onClick={onClickSkipQuestion}
              type="submit"
              className={styles.buttonSkip}
            >
              Пропустить
            </button>
          </div>
        </div>
      )}
    </div>
    {!resultAnswer && (
      <div className={styles.mobileContainerButton}>
        <div className={styles.buttonContainer}>
          <button
            onClick={onClickAnswer}
            type="submit"
            className={styles.buttonConfirm}
          >
            Ответить
          </button>
          <button
            onClick={onClickSkipQuestion}
            type="submit"
            className={styles.buttonSkip}
          >
            Пропустить
          </button>
        </div>
      </div>
    )}
  </>
);

TestAnswer.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  resultAnswer: PropTypes.oneOfType([
    PropTypes.shape({
      rightAnswer: PropTypes.number,
      userAnswer: PropTypes.number,
      userAnswerCorrectly: PropTypes.bool,
      questionExplanation: PropTypes.string,
    }),
    PropTypes.bool,
  ]).isRequired,
  onClickAnswer: PropTypes.func,
  onChangeUserAnswer: PropTypes.func,
  onClickSkipQuestion: PropTypes.func,
};

TestAnswer.defaultProps = {
  onClickAnswer: () => null,
  onChangeUserAnswer: () => null,
  onClickSkipQuestion: () => null,
};

export default TestAnswer;
