import React from 'react';

import CalculatorKey from '../CalculatorKey';

import './index.css';

const CalculatorKeys = ({handleCalculatorButtonClick, handleCalculateButtonClick}) => {
  return (
    <div className="calculator-keys">
      <div className="calculator-keys-row">
        <CalculatorKey label="CE" payload="clear" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="C" payload="clear" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="&#8617;" payload="back" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="/" payload="/" handleCalculatorButtonClick={handleCalculatorButtonClick} />
      </div>
      <div className="calculator-keys-row">
        <CalculatorKey label="7" payload="7" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="8" payload="8" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="9" payload="9" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="x" payload="*" handleCalculatorButtonClick={handleCalculatorButtonClick} />
      </div>
      <div className="calculator-keys-row">
        <CalculatorKey label="4" payload="4" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="5" payload="5" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="6" payload="6" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="-" payload="-" handleCalculatorButtonClick={handleCalculatorButtonClick} />
      </div>
      <div className="calculator-keys-row">
        <CalculatorKey label="1" payload="1" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="2" payload="2" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="3" payload="3" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="+" payload="+" handleCalculatorButtonClick={handleCalculatorButtonClick} />
      </div>
      <div className="calculator-keys-row">
        <CalculatorKey label="(-)" payload="-" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="0" payload="0" handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="," payload="." handleCalculatorButtonClick={handleCalculatorButtonClick} />
        <CalculatorKey label="=" payload="calculate" handleCalculatorButtonClick={handleCalculatorButtonClick} />
      </div>
    </div>
  )
}

export default CalculatorKeys;