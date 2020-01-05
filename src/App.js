import React, { Component } from 'react';
import range from 'lodash/range';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';
import Slider from './components/Slider';
import './App.css';

const countOfYears = 11; // This should be greater 1 than real size because of including today.
const startYear=2021;
const priceSliderRange = [200, 2500];
const priceSliderStep = 200;
const percentSliderRange = [-90, 200];
const percentSliderStep = 10;
const carbonPriceToday = 200;
const priceGivenOfCO2 = 1500;
const percentGiven = 50;

const emissionsToday = 8.93902859111264;
const emissionsLast = emissionsToday / 2;

const data = [
  {
    name: 'Banana',
    currentPrice: 2,
    CO2perTon: 0.000072,
    carbonPriceToday,
  },
  {
    name: 'Burger',
    currentPrice: 30,
    CO2perTon: 0.004,
    carbonPriceToday,
  },
  {
    name: 'Book',
    currentPrice: 100,
    CO2perTon: 0.0027,
    carbonPriceToday,
  },
  {
    name: '1L oil',
    currentPrice: 12,
    CO2perTon: 0.002392,
    carbonPriceToday,
  },
  {
    name: 'A flight to London',
    currentPrice: 500,
    CO2perTon: 0.212,
    carbonPriceToday,
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: priceGivenOfCO2, // default slider price
      value1: priceGivenOfCO2, // price slider of component 2
      percent: percentGiven, // % slider of component 2
      selectedLegends: [(data[0] || {}).name],
    }
  }

  getSliderArray = (min, max, step) => {
    return range(0, parseInt((max - min) / step) + 1)
      .map(num => min + step * num);
  }

  render() {
    const { value, value1, percent } = this.state;
    const priceSliderValues = this.getSliderArray(...priceSliderRange, priceSliderStep);
    const percentSliderValues = this.getSliderArray(...percentSliderRange, percentSliderStep);
    return (
      <>
        <div className="app-component1">
          <h2>Component 1</h2>
          <Slider
            type={0}
            value={value}
            sliderMin={priceSliderRange[0]}
            sliderMax={priceSliderRange[1]}
            sliderStep={50}
            sliderValues={priceSliderValues}
            onSliderInput={(e, value) => {
              this.setState({ value });
            }}
          />
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
        </div>
        <div className="app-component2">
          <h2>Component 2</h2>
          <Slider
            type={0}
            value={value1}
            sliderMin={priceSliderRange[0]}
            sliderMax={priceSliderRange[1]}
            sliderStep={50}
            sliderValues={priceSliderValues}
            onSliderInput={(e, value) => this.setState({ value1: value })}
          />
          <Slider
            type={1}
            value={percent}
            sliderMin={percentSliderRange[0]}
            sliderMax={percentSliderRange[1]}
            sliderStep={1}
            sliderValues={percentSliderValues}
            onSliderInput={(e, value) => this.setState({ percent: value })}
          />
          <div className="app-chart">
            <Chart2
              height="100%"
              width="100%"
              backgroundColor="transparent"
              emissionsToday={emissionsToday}
              emissionsLast={emissionsLast}
              startYear={startYear}
              countOfYears={countOfYears}
              carbonPriceToday={carbonPriceToday}
              priceGivenOnSlider={value1}
              percentGivenOnSlider={percent}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
