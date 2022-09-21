import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const getStyleName = (nameOfButton) => {
  const className = {
    "=": "equals",
    x: "operation",
    "-": "operation",
    "+": "operation",
    "/": "operation",
  };
  return className[nameOfButton];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(AppContext);

  // User click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      number: !calc.number.toString().includes(".")
        ? calc.number + value
        : calc.number,
    });
  };

  // User click C
  const resetClick = () => {
    setCalc({ sign: "", number: 0, result: 0 });
  };

  // User click number
  const clickButton = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.number + numberString);
    }

    setCalc({
      ...calc,
      number: numberValue,
    });
  };

  // User click operation
  const signClick = () => {
    setCalc({
      sign: value,
      result: !calc.result && calc.number ? calc.number : calc.result,
      number: 0,
    });
  };

  // User click equals
  const equalsClick = () => {
    if (calc.result && calc.number) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        result: math(calc.result, calc.number, calc.sign),
        sign: "",
        number: 0,
      });
    }
  };

  // User click percent
  const percentClick = () => {
    setCalc({
      number: calc.number / 100,
      result: calc.result / 100,
      sign: "",
    });
  };

  // User click invert button
  const invertClick = () => {
    setCalc({
      number: calc.number ? calc.number * -1 : 0,
      result: calc.result ? calc.result * -1 : 0,
      sign: "",
    });
  };

  const btnClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "=": equalsClick,
      "%": percentClick,
      "+-": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return clickButton();
    }
  };

  return (
    <button onClick={btnClick} className={`${getStyleName(value)} button`}>
      {value}
    </button>
  );
};

export default Button;
