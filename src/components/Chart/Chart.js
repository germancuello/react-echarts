import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';



class Chart extends Component {
  getChartOption = () => {
    return {};
  }

  render() {
    return (
      <ReactEcharts
        style={{ height: '100%', width: '100%' }}
        option={this.getChartOption()}
        notMerge
        lazyUpdate
      />
    );
  }
}

export default Chart;