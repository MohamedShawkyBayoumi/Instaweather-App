import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForecast';
import TodayForecast from './components/TodayForecast';
import axios from 'axios';
import { API } from './services';

function App() {
  const [data, setData] = useState({}),
  fetchWeatherData = async (latitude, longitude) => {
    try {
      let res = await axios.get(`${API}/${latitude},${longitude}`)
      setData(res.data);
    } catch (error) {
      console.log(error)
    }
  },
  successCallback = (position) => {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude)
    fetchWeatherData(latitude, longitude);
  },
  failureCallback = (error) => {
    console.log(error)
  }

  useEffect(() => {
    // GET user Locatiton
    window.navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
    
  }, []);
  console.log('data', data)
  return (
    <div className="App">
      <main>
        <Header />
        <TodayForecast {...data} />
        <HourlyForecast {...data} />
      </main>
    </div>
  );
}

export default App;
