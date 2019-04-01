import React from 'react';

import './index.css';

const CalculatorValue = ({toResolve}) => {
  return (
    <input type="text" className="calculator-value" value={toResolve} />
  )
}

export default CalculatorValue;