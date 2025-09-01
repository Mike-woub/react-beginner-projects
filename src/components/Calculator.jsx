import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');

  const clear = () => setInputValue('');
  const backspace = () => setInputValue(inputValue.slice(0, -1));
  const display = (value) => setInputValue((prev) => prev + value);

  const calculate = () => {
    try {
      const result = evaluate(inputValue);
      setInputValue(result.toString());
    } catch {
      setInputValue('Error');
    }
  };

  return (
    <div className="calc-container">
      <div className="calculator">
        <input
          type="text"
          className="value"
          value={inputValue}
          readOnly
        />

        <span className="num clear" onClick={clear}>C</span>
        <span className="num back" onClick={backspace}>←</span>
        <span onClick={() => display('/')}>/</span>
        <span onClick={() => display('*')}>*</span>

        <span onClick={() => display('7')}>7</span>
        <span onClick={() => display('8')}>8</span>
        <span onClick={() => display('9')}>9</span>
        <span onClick={() => display('-')}>-</span>

        <span onClick={() => display('4')}>4</span>
        <span onClick={() => display('5')}>5</span>
        <span onClick={() => display('6')}>6</span>
        <span onClick={() => display('+')} className="plus">+</span>

        <span onClick={() => display('1')}>1</span>
        <span onClick={() => display('2')}>2</span>
        <span onClick={() => display('3')}>3</span>
        <span onClick={() => display('0')}>0</span>

        <span onClick={() => display('00')}>00</span>
        <span onClick={() => display('.')}>.</span>
        <span onClick={calculate} className="num equal">=</span>
      </div>
    </div>
  );
};

export default Calculator;
