import React, { Component } from 'react';

import CalculatorValue from '../CalculatorValue';
import CalculatorKeys from '../CalculatorKeys';

import './index.css';

class Calculator extends Component {
  state = {
    toResolve: ''
  }

  handleCalculatorButtonClick = payload => {
    switch(payload) {
      case 'calculate': 
        this.setState(prevState => ({
          toResolve: this.calculate(prevState.toResolve)
        }))
        break;
      case 'back':
        this.setState(prevState => ({
          toResolve: prevState.toResolve.slice(0, -1)
        }));
        break;
      case 'clear':
        this.setState({
          toResolve: ''
        });
        break;
      default: 
        this.setState(prevState => ({
          toResolve: prevState.toResolve + payload
        }))
    }
  }

  calculate = toResolve => {
    try {
      return eval(toResolve);
    } catch(e) {
      return 'Syntax Error'
    }
  }

  hanleCalculateButtonClick = () => {

  }
  
  render() {
    return (
      <form className="calculator">
        <CalculatorValue toResolve={this.state.toResolve} />
        <CalculatorKeys handleCalculateButtonClick={this.handleCalculateButtonClick} handleCalculatorButtonClick={this.handleCalculatorButtonClick} />
      </form>
    )
  }
}

export default Calculator;