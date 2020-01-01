import React, { Component } from 'react';
import Chart from './components/Chart';
import './App.css';

const countOfYears = 11;
const startYear=2021;
const data = [
  {
    name: 'Banana',
    currentPrice: 2,
    CO2perTon: 0.000072,
    carbonPriceToday: 200,
  },
  {
    name: 'Burger',
    currentPrice: 30,
    CO2perTon: 0.004,
    carbonPriceToday: 200,
  },
  {
    name: 'Book',
    currentPrice: 100,
    CO2perTon: 0.0027,
    carbonPriceToday: 200,
  },
  {
    name: '1L oil',
    currentPrice: 12,
    CO2perTon: 0.002392,
    carbonPriceToday: 200,
  },
  {
    name: 'A flight to London',
    currentPrice: 500,
    CO2perTon: 0.212,
    carbonPriceToday: 200,
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1500,
    }
  }
  render() {
    const { value } = this.state;
    return (
      <>
        <h1>Chart Component</h1>
        <div className="app-slider">
          <input
            type="range"
            value={value}
            min="0"
            max="10000"
            step="10"
            onInput={(e) => this.setState({ value: e.target.value })}
          />
          <span id="output">{value}</span>
        </div>
        <div className="app-chart">
          <Chart
            height="100%"
            width="100%"
            backgroundColor="transparent"
            data={data}
            startYear={startYear}
            countOfYears={countOfYears}
            priceGivenOnSlider={this.state.value}
          />
        </div>
      </>
    );
  }
}

export default App;
