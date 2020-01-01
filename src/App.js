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
      selectedLegends: [(data[0] || {}).name],
    }
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <h1>Chart Component</h1>
        <div className="app-slider">
          Price given on slider: {value}
          <br />
          <input
            type="range"
            value={value}
            min="200"
            max="2500"
            step="10"
            onInput={(e) => this.setState({ value: e.target.value })}
            className="app-slider-input"
          />
        </div>
        <div className="app-chart">
          <Chart
            height="100%"
            width="100%"
            backgroundColor="transparent"
            data={data || []}
            startYear={startYear}
            countOfYears={countOfYears}
            priceGivenOnSlider={value}
            selectedLegends={this.state.selectedLegends}
            handleLegendChange={(validLegends) => this.setState({ selectedLegends: validLegends })}
          />
        </div>
      </>
    );
  }
}

export default App;
