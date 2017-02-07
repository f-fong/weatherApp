import React from 'react';
import $ from 'jquery';
import Day from './Day';

export default class WeatherApp extends React.Component {
  constructor(props) {
  super(props); 

    this.state = {
      location: window.localStorage.getItem('city') || 'Mountain View, CA',
      weather: [],
      fahrenheit: true
    };

    this.setCity = this.setCity.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(location) {
    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + 
          location + '")&format=json', (data) => {
      if (data.query.results === null) {
        alert(`Location "${location}" not found`);
      } else {
        const { city, region, country } = data.query.results.channel.location;
        this.setState({
          location: `${city}, ${region}, ${country}`,
          weather: data.query.results.channel.item.forecast
        });
        console.log(data);
      }
    });
  } 

  componentDidMount() {
    this.getWeather(this.state.location);
  }

  setCity(event) {
    event.preventDefault();

    this.getWeather(this.refs.cityInput.value);
    window.localStorage.setItem('city', this.refs.cityInput.value);
  }

  render() {
    const { location } = this.state; 

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="https://www.yahoo.com/?ilc=401" target="_blank"> <img className="brand" src="https://poweredby.yahoo.com/purple.png" width="134" height="29"/></a>
            </div>

            <div className="collapse navbar-collapse">
              <form className="navbar-form navbar-right" role="search" onSubmit={this.setCity}>
                <div className="form-group">
                  <input ref="cityInput" type="text" className="form-control" placeholder="Enter City" required />
                </div>
                <button type="submit" className="btn btn-default">Get Forecast</button>
              </form>
            </div>
          </div>
        </nav>
        <h1 className="city">{location}</h1>
        <div className="units">
          <a href="#" onClick={() => { this.setState({ fahrenheit: true })}}>°F</a> | <a href="#" onClick={() => { this.setState({ fahrenheit: false })}}>°C</a>
        </div>
        <Day dayList={this.state.weather} unit={this.state.fahrenheit}/>
      </div>
		);
	}
}



