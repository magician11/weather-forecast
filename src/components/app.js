import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      <h1 className="text-center">5 Day Weather Forecast <small>with averages</small></h1>
    <SearchBar />
  <WeatherList />
<footer className="text-center">
<hr />
<p>App built by <a href="http://www.golightlyplus.com">Golightly+</a>. Inspired by <a href="https://www.udemy.com/react-redux/#/">Modern React with Redux on Udemy</a>.</p>
</footer>
</div>
);
}
}
