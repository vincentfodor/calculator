import React from 'react';

import './index.css';

const CalculatorKey = ({label, payload, handleCalculatorButtonClick}) => {
  return (
    <button className="calculator-key" type="button" onClick={() => handleCalculatorButtonClick(payload)}>
      <label className="calculator-key-label">{label}</label>
    </button>
  )
}

export default CalculatorKey;