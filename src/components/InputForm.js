import styles from "./InputForm.module.css";
import { useState } from "react";
const InputForm = function (props) {
  const [inputCurr, setInputCurr] = useState("");
  const [inputSav, setInputSav] = useState("");
  const [inputIntrs, setInputIntrs] = useState("");
  const [inputDurn, setInputDurn] = useState("");

  const submitHandler = function (e) {
    e.preventDefault();
    //console.log("SUbmitted");
    const res = {
      "current-savings": inputCurr,
      "yearly-contribution": inputSav,
      "expected-return": inputIntrs,
      duration: inputDurn,
    };

    for (const property in res) {
      if (res[property].trim().length == 0) {
        alert("Put all input field correctly");
        return;
      }
    }
    // for (let key in res) {
    //   if (res.hasOwnProperty(key)) {
    //     res[key] = +res[key];
    //   }
    // }

    props.onSubmit(res);
    //console.log(res);
  };

  const resetHandler = () => {
    //console.log("logged");
    setInputCurr("");
    setInputSav("");
    setInputIntrs("");
    setInputDurn("");
  };

  const inputCurrHandler = (event) => {
    setInputCurr(event.target.value);
    // console.log(event.target.value);
  };
  const inputSavHandler = (event) => {
    setInputSav(event.target.value);
    //console.log(event.target.value);
  };
  const inputIntrsHandler = (event) => {
    setInputIntrs(event.target.value);
    //console.log(event.target.value);
  };
  const inputDurnHandler = (event) => {
    setInputDurn(event.target.value);
    //console.log(event.target.value);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={inputCurrHandler}
            type="number"
            id="current-savings"
            value={inputCurr}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={inputSav}
            onChange={inputSavHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={inputIntrs}
            onChange={inputIntrsHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={inputDurn}
            onChange={inputDurnHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          onClick={resetHandler}
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
