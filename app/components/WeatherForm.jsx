const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    let location = this.refs.location.value;
    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
        <form onSubmit={this.onFormSubmit} className="text-center">
          <input type="text" className="form-control" ref="location"/>
          <button type="submit" className="btn btn-primary">Get Weather</button>
        </form>
    );
  }
});

module.exports = WeatherForm;