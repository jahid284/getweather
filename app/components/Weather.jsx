const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
    }
  },
  handleSearch: function(location){
    let that = this;
    this.setState({
      isLoading: true,
      errorModalMessage: undefined
    });
    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(e){
      that.setState({
        isLoading: true,
        errorModalMessage: e.message,
        isLoading: false
      });
    });
  },
  render: function(){
    let {isLoading,location,temp,errorModalMessage} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching Data...</h3>;
      }else if(temp && location){
        return <WeatherMessage location ={location} temp ={temp}/>;
      }
    }

    function renderModalMessage(){
      if(typeof errorModalMessage === 'string'){
        return (<ErrorModal/>);
      }
    }
    
    return(
      <section className="weather-section text-center">
        <h2>Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderModalMessage()}
      </section>
    );
  }
});

module.exports = Weather;