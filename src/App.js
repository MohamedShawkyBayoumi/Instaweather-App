import React from 'react';
import './App.css';
import Header from './components/Header';
import TodayForecast from './components/TodayForecast';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <TodayForecast />
      </main>
    </div>
  );
}

export default App;
