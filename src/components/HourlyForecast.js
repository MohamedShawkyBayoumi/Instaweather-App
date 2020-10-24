import React from 'react';
import { ReactComponent as CloudyIcon } from '../assets/cloudy.svg';

const HourlyForecast = ({ hourly }) => {
    return (
        <section>
            <div className="container">
                <div className="hourly-forecast-section">
                    <div className="section-top-bar">
                        <button className="hourly-button-active">Hourly</button>
                        <button>Daily</button>
                    </div>
                    <div className="hourly-forecast">
                        {hourly && hourly.data.length > 0 && hourly.data.map(({ temperature, time }, index) => (
                            <div key={index} className="hourly-forecast-card">
                                <h6>
                                    {`${new Date(time * 1000).getHours()}:0${new Date(time * 1000).getMinutes()}`}
                                </h6>
                                <CloudyIcon />
                                <h5>{temperature}°</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HourlyForecast;