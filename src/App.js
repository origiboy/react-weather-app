import React from 'react';
import {objToGet} from './functions.js';

import TopHeader from './TopHeader';
import Search from './Search';
import LocationButton from './LocationButton';
import DayInfo from './DayInfo';
import DayDetailedInfo from './DayDetailedInfo';
import WeekInfo from './WeekInfo';
import SunriseSunset from './SunriseSunset';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLocation: false,
      forecast: null,
      name: '',
      time: {
        timeSunrise: 0,
        timeSunset: 0,
      },
      params: {
        appid: process.env.REACT_APP_WEATHER_API_KEY,
        q: 'Москва',
        lang: 'ru',
        units: 'metric',
      },
      paramsLocation: {
        appid: process.env.REACT_APP_WEATHER_API_KEY,
        lat: 0,
        lon: 0,
        lang: 'ru',
        units: 'metric',
      },
      loading: true,
    };
    this.buttonSearchClickSearching = this.buttonSearchClickSearching.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }
  location(lat, lon) {
    this.setState( prevState => ({
      isLocation: true,
      isForecast: false,
      paramsLocation: {
        appid: prevState.params.appid,
        lat: lat,
        lon: lon,
        lang: prevState.params.lang,
        units: prevState.params.units,
      },
    }), () => {
     this.getWeather();
     this.getForecast();
    });
  }
  getWeather() {
    let query;
    if (this.state.isLocation) {
        query = objToGet(this.state.paramsLocation);
    } else {
      query = objToGet(this.state.params);
    }
    fetch("http://api.openweathermap.org/data/2.5/weather?" + query)
      .then(res => res.json())
      .then(
        (result) => {
          let timeSunrise = new Date(result.sys.sunrise * 1000);
          let timeSunset = new Date(result.sys.sunset * 1000);

          this.setState({
            info: result,
            name: result.name,
            time: {
              sunriseSeconds: result.sys.sunrise,
              sunsetSeconds: result.sys.sunset,
              sunrise: ("0" + timeSunrise.getHours()).slice(-2) + ":" + ("0" + timeSunrise.getMinutes()).slice(-2),
              sunset: ("0" + timeSunset.getHours()).slice(-2) + ":" + ("0" + timeSunset.getMinutes()).slice(-2),
            },

            loading: false,
          });
        },
      )
  }
  getForecast() {
    let query;
    if (this.state.isLocation) {
        query = objToGet(this.state.paramsLocation);
    } else {
      query = objToGet(this.state.params);
    }
    fetch("http://api.openweathermap.org/data/2.5/forecast?" + query)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            forecast: result,
          });
        },
      )
  }
      componentDidMount() {
        document.title = "Weather App";
        this.getWeather();
        this.getForecast();
      }
      buttonSearchClickSearching(q) {
          this.setState( prevState => ({
            isLocation: false,
            params: {
              appid: prevState.params.appid,
              q: q,
              lang: prevState.params.lang,
              units: prevState.params.units,
            },
          }), () => { this.getWeather(); this.getForecast() });
      }
  render() {
    if (this.state.loading || this.state.forecast == null) {
      return <Loading />;
    }
    return (
      <div className="container">
        <TopHeader city={ this.state.name } />
        <Search buttonSearchClick={(q) => this.buttonSearchClickSearching(q)} />
        <LocationButton location={(lat, lon) => this.location(lat, lon)} />
        <DayInfo info={ this.state.info } />
        <DayDetailedInfo info={ this.state.info } />
        <WeekInfo info={ this.state.forecast } />
        <SunriseSunset sunrise={ this.state.time.sunrise } sunset={ this.state.time.sunset } sunriseSeconds={ this.state.time.sunriseSeconds } sunsetSeconds={ this.state.time.sunsetSeconds } />
      </div>
    );
  }
}
const Loading = () => (
  <div className="container">Загрузка...</div>
);

export default App;
