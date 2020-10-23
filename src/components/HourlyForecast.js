import React from 'react';
import { ReactComponent as CloudyIcon } from '../assets/cloudy.svg';

const HourlyForecast = () => {
    return (
        <section>
            <div className="container">
                <div className="hourly-forecast-section">
                    <div className="section-top-bar">
                        <button className="hourly-button-active">Hourly</button>
                        <button>Daily</button>
                    </div>
                    <div className="hourly-forecast">
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1, ].map(() => (
                            <div className="hourly-forecast-card">
                                <h6>Now</h6>
                                <CloudyIcon />
                                <h5>81°</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HourlyForecast;