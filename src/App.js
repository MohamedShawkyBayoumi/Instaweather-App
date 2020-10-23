import React from 'react';
import './App.css';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForecast';
import TodayForecast from './components/TodayForecast';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <TodayForecast />
        <HourlyForecast />
      </main>
    </div>
  );
}

export default App;
