"use client";
import { useState } from "react";
import { salsa } from "./fonts";
import Header from "./header";

export default function Calculator({ className, onClose }) {
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("0");
  const [operation, setOperation] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleNumberClick = (num) => {
    if (hasError) {
      clearDisplay();
      setHasError(false);
      setSecondOperand(num);
      return;
    }
    setSecondOperand((prev) => (prev === "0" ? num : prev + num));
  };

  const handleOperatorClick = (op) => {
    if (hasError) {
      clearDisplay();
      setHasError(false);
      return;
    }

    if (firstOperand === "") {
      setFirstOperand(secondOperand);
      setSecondOperand("0");
      setOperation(op);
    } else {
      const result = calculateResult();
      if (result !== undefined) {
        setFirstOperand(result);
        setSecondOperand("0");
        setOperation(op);
      }
    }
  };

  const handleDecimalClick = () => {
    if (hasError) {
      clearDisplay();
      setHasError(false);
      return;
    }
    if (!secondOperand.includes(".")) {
      setSecondOperand((prev) => prev + ".");
    }
  };

  const calculateResult = () => {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    let result = 0;

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setHasError(true);
          result = "Error: Div/0";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        return;
    }

    setFirstOperand("");
    setSecondOperand(result.toString());
    setOperation("");
    return result.toString();
  };

  const clearDisplay = () => {
    setFirstOperand("");
    setSecondOperand("0");
    setOperation("");
  };

  const deleteLastChar = () => {
    if (hasError) {
      clearDisplay();
      setHasError(false);
      return;
    }
    setSecondOperand((prev) => (prev.length === 1 ? "0" : prev.slice(0, -1)));
  };

  return (
    <div
      className={`rounded-lg p-2 border-2 flex-col justify-between border-gray-700 bg-white/10 backdrop-blur-xl ${salsa.className} ${className}`}
    >
      <Header onClose={onClose} />
      <div className="flex flex-col items-end justify-center h-24 bg-black text-white rounded mb-2 p-2">
        <div className="text-sm text-gray-400">
          {firstOperand} {operation}
        </div>
        <div className="text-xl sm:text-2xl">{secondOperand}</div>
      </div>
      <div
        className="grid grid-cols-4 gap-1 h-[65%]"
        style={{ gridTemplateRows: "repeat(5, 1fr)" }}
      >
        <Cell colSpan={2} onClick={clearDisplay}>
          AC
        </Cell>
        <Cell onClick={deleteLastChar}>Del</Cell>
        <Cell onClick={() => handleOperatorClick("/")}>/</Cell>

        {[1, 2, 3].map((num) => (
          <Cell key={num} onClick={() => handleNumberClick(num.toString())}>
            {num}
          </Cell>
        ))}
        <Cell onClick={() => handleOperatorClick("*")}>*</Cell>

        {[4, 5, 6].map((num) => (
          <Cell key={num} onClick={() => handleNumberClick(num.toString())}>
            {num}
          </Cell>
        ))}
        <Cell onClick={() => handleOperatorClick("+")}>+</Cell>

        {[7, 8, 9].map((num) => (
          <Cell key={num} onClick={() => handleNumberClick(num.toString())}>
            {num}
          </Cell>
        ))}
        <Cell onClick={() => handleOperatorClick("-")}>-</Cell>

        <Cell onClick={handleDecimalClick}>.</Cell>
        <Cell onClick={() => handleNumberClick("0")}>0</Cell>
        <Cell colSpan={2} onClick={calculateResult}>
          =
        </Cell>
      </div>
    </div>
  );
}

const Cell = ({ children, colSpan = 1, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center border border-black rounded-xs gap-2 bg-[#c3ffecc7] hover:bg-[#c3ffec] text-lg font-normal sm:text-xl cursor-pointer ${className}`}
    style={{
      gridColumn: `span ${colSpan} / span ${colSpan}`,
      minHeight: "3rem",
    }}
  >
    {children}
  </button>
);
