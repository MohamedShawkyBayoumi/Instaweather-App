import React from 'react'
import { ReactComponent as CloudyIcon } from '../assets/cloudy.svg';

const TodayForecast = () => {
    return (
        <section>
            <div className="container">
                <div className="today-forecast-section">
                    <div className="left">
                        <h1>New Cairo</h1>
                        <h5>Friday 20, 2020</h5>
                        <CloudyIcon />
                    </div>
                    <div className="right">
                        <h1>72°</h1>
                        <h4>81° / <span>63°</span></h4>
                        <h5>Cloudy throughout the day</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TodayForecast;