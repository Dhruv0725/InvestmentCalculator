import InputForm from "./components/InputForm";
import ResultTable from "./components/ResultTable";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let invested = currentSavings;
    //console.log(currentSavings, yearlyContribution, expectedReturn, duration);
    let totalInterest = 0;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      invested += yearlyContribution;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        invested: invested,
      });

      //console.log(yearlyData);
    }
  }

  return (
    <div>
      <Header />
      <InputForm onSubmit={calculateHandler}></InputForm>
      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment Calculated yet</p>
      )}
      {userInput && <ResultTable results={yearlyData}></ResultTable>}
    </div>
  );
}

export default App;
