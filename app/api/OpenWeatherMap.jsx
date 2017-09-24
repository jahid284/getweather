const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=53f2eea0c7a6b030819137acb59f14fe&units=metric';

module.exports = {
  getTemp: function(location){
    //Encode url
    let encodedLocation = encodeURIComponent(location);
    //Add location to api
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    //Get weather data using axios
    return axios.get(requestUrl).then(function(response){
      if(response.data.cod && response.data.message){
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    },function(response){
      throw new Error(response.data.message);
    });
  }
}
