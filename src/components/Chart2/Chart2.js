import React from 'react';
import range from 'lodash/range';
import ReactEcharts from 'echarts-for-react';

export default function Chart2({
  height,
  width,
  backgroundColor,
  emissionsToday,
  emissionsLast,
  startYear,
  countOfYears,
  carbonPriceToday,
  priceGivenOnSlider,
  percentGivenOnSlider,
}) {
  const rate = 0 - percentGivenOnSlider / 100;
  const additionalPrice = (priceGivenOnSlider - carbonPriceToday) / (countOfYears - 1);
  const pricesByYear = range(0, countOfYears).map(i => carbonPriceToday + additionalPrice * i);
  const avgByYear = range(0, countOfYears).map(i => emissionsToday - emissionsLast * i / countOfYears);
  const diffOfMonthByYear = range(0, countOfYears).map(i => pricesByYear[i] * avgByYear[i] * rate / 12);

  const xAxisData = range(startYear, startYear + countOfYears - 1);
  xAxisData.unshift('Today');

  const option = {
    grid: {
      left: 200,
      right: 60,
      bottom: 50,
      top: 10,
      containLabel: false,
      show: true,
      borderWidth: 2,
      backgroundColor,
    },
    legend: {
      show: true,
      orient: 'vertical',
      left: 0,
      icon: 'circle',
    },
    tooltip: {
      trigger: 'item',
      position: 'top',
      axisPointer: {
        type: 'shadow',
      },
      opacity: 0.9,
      backgroundColor: '#ddd',
      textStyle: {
        color: '#000',
      },
      confine: true,
      formatter: (data) => {
        const { value } = data;
        const firstLine = 'would cost<br/>';
        const secondLine = `<b>${value.toFixed(2)} kr</b> in`;
        return firstLine + secondLine;
      },
    },
    xAxis: [{
      type: 'category',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: xAxisData,
    }],
    yAxis: [{
      name: 'Price',
      nameLocation: 'middle',
      nameGap: 35,
      type: 'value',
      axisLabel: {
        formatter: value => (
          value < 1000 ? value : `${value / 1000}k`
        ),
      }
    }],
    series: [{
      name: 'Difference / month',
      type: 'bar',
      data: diffOfMonthByYear,
    }],
  }

  console.error('option', option);

  return (
    <ReactEcharts
      style={{ height, width }}
      option={option}
      notMerge
      lazyUpdate
    />
  );
}