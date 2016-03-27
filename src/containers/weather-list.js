import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  weatherInfo(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);

    const CELL_HEIGHT = 220;

    return (
      <tr key={cityData.city.id}>
      <td>
      <GoogleMap city={cityData.city.name} country={cityData.city.country} size={CELL_HEIGHT}/>
    <div className="text-center">{cityData.city.name} ({cityData.city.country})</div>
  </td>
  <td><Chart colour="blue" data={temps} units="&deg;C" height={CELL_HEIGHT} /></td>
<td><Chart colour="green" data={pressures} units="hPa" height={CELL_HEIGHT} /></td>
<td><Chart colour="black" data={humidities} units="%" height={CELL_HEIGHT} /></td>
</tr>
);
}

render() {
  return (
    <div className="table-responsive">
    <table className="table table-hover weather-list">
    <thead>
    <tr>
    <th>City</th>
  <th>Temperature (°C)</th>
<th>Pressure (hPa)</th>
<th>Humidity (%)</th>
</tr>
</thead>
<tbody>
{this.props.weather.map(this.weatherInfo)}
</tbody>
</table>
</div>
);
}
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
