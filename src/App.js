import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForecast';
import TodayForecast from './components/TodayForecast';
import axios from 'axios';
import { API } from './services';

function App() {
  const [data, setData] = useState({}),
  [unitMeasure, setUnitMeasure] = useState(1),
  [unitsMeasurement] = useState([
    {
      id: 1,
      unit: 'C'
    },
    {
      id: 2,
      unit: 'F'
    },
  ]),
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
  };

  useEffect(() => {
    // GET user Locatiton
    window.navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
    
  }, []);
  console.log('data', data)
  return (
    <div className="App">
      <main>
        <Header
          unitsMeasurement={unitsMeasurement}
          setUnitMeasure={setUnitMeasure}
          unitMeasure={unitMeasure}
        />
        <TodayForecast
          {...data}
          unitMeasure={unitMeasure}
        />
        <HourlyForecast
          {...data}
          unitMeasure={unitMeasure}
        />
      </main>
    </div>
  );
}

export default App;
