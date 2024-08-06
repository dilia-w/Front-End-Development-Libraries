import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const Calculator = () => {
  const [display, setDisplay] = React.useState("0");
  const [formula, setFormula] = React.useState("0");

  const handleNumberClick = (value) => {
    if (display === "0") {
      setDisplay(value);
      setFormula(value);
    } else {
      setDisplay(display === "0" ? value : display + value);
      setFormula(formula + value);
    }
  };

  const handleOperatorClick = (operator) => {
    const operators = "+-*/";
    const beforeLastChar = formula.charAt(formula.length - 2);
    const lastChar = formula.charAt(formula.length - 1);

    if (formula.length) {
      const lastCharIsOperator = operators.includes(lastChar) || lastChar === "*";
      const beforeLastCharIsOperator =
        operators.includes(beforeLastChar) || beforeLastChar === "*";

      if (
        (lastCharIsOperator && operator !== "-") ||
        (beforeLastCharIsOperator && lastCharIsOperator)
      ) {
        const indexToSlice = beforeLastCharIsOperator ? -2 : -1;
        const updatedFormula =
          formula.substring(0, formula.length + indexToSlice) + operator;
        setDisplay(operator);
        setFormula(updatedFormula);
      } else {
        setDisplay(operator);
        setFormula(formula + operator);
      }
    }
  };

  const handleDecimalClick = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
      setFormula(formula + ".");
    }
  };

  const handleEqualsClick = () => {
    let result = eval(formula);

    result = parseFloat(result.toFixed(4));

    setDisplay(result.toString());
    setFormula(result.toString());
  };

  const handleClearClick = () => {
    setDisplay("0");
    setFormula("0");
  };

  const handleDeleteClick = () => {
    const newFormula = formula.slice(0, -1);
    const updatedDisplay = newFormula ? formula.slice(0, -1) : "0";

    setDisplay(updatedDisplay);
    setFormula(newFormula || "0");
  };

  return (
    <div className="calculator">
      <div className="input-display">{formula}</div>
      <div id="display" className="display">{display}</div>
      <button id="clear" onClick={handleClearClick}>AC</button>
      <button id="delete" onClick={handleDeleteClick}>DEL</button>
      <button id="multiply" onClick={() => handleOperatorClick("*")}>*</button>
      <button id="seven" onClick={() => handleNumberClick("7")}>7</button>
      <button id="eight" onClick={() => handleNumberClick("8")}>8</button>
      <button id="nine" onClick={() => handleNumberClick("9")}>9</button>
      <button id="subtract" onClick={() => handleOperatorClick("-")}>-</button>
      <button id="four" onClick={() => handleNumberClick("4")}>4</button>
      <button id="five" onClick={() => handleNumberClick("5")}>5</button>
      <button id="six" onClick={() => handleNumberClick("6")}>6</button>
      <button id="add" onClick={() => handleOperatorClick("+")}>+</button>
      <button id="one" onClick={() => handleNumberClick("1")}>1</button>
      <button id="two" onClick={() => handleNumberClick("2")}>2</button>
      <button id="three" onClick={() => handleNumberClick("3")}>3</button>
      <button id="divide" onClick={() => handleOperatorClick("/")}>/</button>
      <button id="zero" onClick={() => handleNumberClick("0")}>0</button>
      <button id="decimal" onClick={handleDecimalClick}>.</button>
      <button id="equals" onClick={handleEqualsClick}>=</button>
    </div>
  );
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
