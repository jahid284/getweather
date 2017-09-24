const React = require('react');
const Weather = require('Weather');
const WeatherMessage = (props) => {
  let {location,temp} = props;
  return(
    <h3> It's {temp} °C in {location} </h3>
  );
}

module.exports = WeatherMessage;