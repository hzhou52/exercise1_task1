import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function DiscreteSlider() {
  const classes = useStyles();
  //this.handleSubmit = this.handleSubmit.bind(this);
 
  return (
    
    <div className={classes.root}>
      Take your body Temperature:
      <Typography id="discrete-slider" gutterBottom>
        Temperature
      </Typography>
      <Slider
        defaultValue={37}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={30}
        max={45}
      />
      <div className={classes.margin} />
      
      <div className={classes.margin} />
      <Typography id="discrete-slider-custom" gutterBottom>
      Take your body Temperature again after running for 2 miles
      </Typography>
      <Slider
        defaultValue={39.5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={30}
        max={45}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-restrict" gutterBottom>
      Take your body Temperature again after cooling down 10 mins
      
      </Typography>
      <Slider
        defaultValue={38}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={30}
        max={45}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
      Take your body Temperature again after cooling down 30 mins
      
      </Typography>
      <Slider
        defaultValue={37.5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={30}
        max={45}
      />
       <br></br>
       
       
    </div>
  );
}
