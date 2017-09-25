const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    let that = this;
    this.setState({isLoading: true});
    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(ErrorMessage){
      that.setState({isLoading: false});
      alert(ErrorMessage);
    });
    
  },
  render: function(){
    let {isLoading,location,temp} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching Data...</h3>;
      }else if(temp && location){
        return <WeatherMessage location ={location} temp ={temp}/>;
      }
    }
    return(
      <section className="weather-section text-center">
        <h2>Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </section>
    );
  }
});

module.exports = Weather;