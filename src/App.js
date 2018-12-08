import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Components/Map'
import Slider from './Components/Slider'

import { Provider } from 'react-redux'
import store from './Models/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Map />
        <Slider />
      </Provider >
    );
  }
}

export default App;
