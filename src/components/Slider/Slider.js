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
      <datalist id={tickmarks} className="app-slider-datalist">
        {sliderValues.map((item, idx) =>
          <div
            key={`slider-${idx}`}
            style={{ display: idx !== 0 && idx !== sliderValues.length - 1 ? 'none' : null }}
          >
            <option value={item} label={item}/>
          </div>
        )}
      </datalist>
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
    </div>
  );
}