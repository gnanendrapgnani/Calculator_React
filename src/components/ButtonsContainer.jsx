import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  return (
    <div className={styles.buttonsContainer}>
      <div className="numPad">
        <button
          key="AC"
          id={styles.grey}
          className={styles.button}
          onClick={() => onButtonClick("AC")}
        >
          AC
        </button>
        <button
          key="DE"
          id={styles.grey}
          className={styles.button}
          onClick={() => onButtonClick("DE")}
        >
          DE
        </button>
        <button
          key="."
          id={styles.grey}
          className={styles.button}
          onClick={() => onButtonClick(".")}
        >
          .
        </button>
        <button
          key="/"
          className={`${styles.button} ${styles.org}`}
          onClick={() => onButtonClick("/")}
        >
          /
        </button>
      </div>
      <div className="numPad">
        <button
          key="7"
          className={styles.button}
          onClick={() => onButtonClick("7")}
        >
          7
        </button>
        <button
          key="8"
          className={styles.button}
          onClick={() => onButtonClick("8")}
        >
          8
        </button>
        <button
          key="9"
          className={styles.button}
          onClick={() => onButtonClick("9")}
        >
          9
        </button>
        <button
          key="*"
          className={`${styles.button} ${styles.org}`}
          onClick={() => onButtonClick("*")}
        >
          *
        </button>
      </div>
      <div className="numPad">
        <button
          key="4"
          className={styles.button}
          onClick={() => onButtonClick("4")}
        >
          4
        </button>
        <button
          key="5"
          className={styles.button}
          onClick={() => onButtonClick("5")}
        >
          5
        </button>
        <button
          key="6"
          className={styles.button}
          onClick={() => onButtonClick("6")}
        >
          6
        </button>
        <button
          key="-"
          className={`${styles.button} ${styles.org}`}
          onClick={() => onButtonClick("-")}
        >
          -
        </button>
      </div>
      <div className="numPad">
        <button
          key="1"
          className={styles.button}
          onClick={() => onButtonClick("1")}
        >
          1
        </button>
        <button
          key="2"
          className={styles.button}
          onClick={() => onButtonClick("2")}
        >
          2
        </button>
        <button
          key="3"
          className={styles.button}
          onClick={() => onButtonClick("3")}
        >
          3
        </button>
        <button
          key="+"
          className={`${styles.button} ${styles.org}`}
          onClick={() => onButtonClick("+")}
        >
          +
        </button>
      </div>
      <div className="numPad">
        <button
          key="00"
          className={styles.button}
          onClick={() => onButtonClick("00")}
        >
          00
        </button>
        <button
          key="0"
          className={styles.button}
          onClick={() => onButtonClick("0")}
        >
          0
        </button>
        <button
          key="="
          id={styles.eq}
          className={`${styles.button} ${styles.org}`}
          onClick={() => onButtonClick("=")}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default ButtonsContainer;
