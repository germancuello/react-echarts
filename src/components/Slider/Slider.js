import React from 'react';

export default function Slider({
  value,
  sliderMin,
  sliderMax,
  sliderStep,
  sliderValues,
  tickmarks,
  onSliderInput,
}) {
  return (
    <div className="app-slider">
      Price given on slider: {value}
      <br />
      <input
        type="range"
        list={tickmarks}
        value={value}
        min={sliderMin}
        max={sliderMax}
        step={sliderStep}
        onInput={onSliderInput}
        className="app-slider-input"
      />
      {/* <datalist id={tickmarks} className="app-slider-datalist">
        {sliderValues.map((item, idx) =>
          <option value={item} label={item} key={`slider-${idx}`}/>
        )}
      </datalist> */}
    </div>
  );
}