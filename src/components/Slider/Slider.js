import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MuiSlider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 700,
    paddingLeft: 50,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export default function Slider({
  type,
  value,
  sliderStep,
  sliderMin,
  sliderMax,
  sliderValues,
  onSliderInput,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
        {type !== 0 ? 'Percent' : 'Price'} given on slider: {value} {type !== 0 ? '%' : 'kr'}
      </Typography>
      <MuiSlider
        value={value}
        aria-labelledby="discrete-slider-always"
        step={sliderStep}
        marks={[
          {
            value: sliderMin,
            label: sliderMin,
          },
          {
            value: sliderMax,
            label: sliderMax,
          },
          ...sliderValues.map(value => ({ value })),
        ]}
        onChange={onSliderInput}
        min={sliderMin}
        max={sliderMax}
        valueLabelDisplay="on"
      />
    </div>
  );
}