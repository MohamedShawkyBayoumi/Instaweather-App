import React, { useState } from 'react';
import { ReactComponent as CloudyIcon } from '../assets/cloudy.svg';
import HourlyDailySection from './HourlyDailySection';

const HourlyForecast = ({ hourly, daily, unitMeasure }) => {
    const [types] = useState([
            {
                id: 1,
                label: 'Hourly'
            },
            {
                id: 2,
                label: 'Daily'
            },
        ]),
        [typeId, setTypeId] = useState(1)
    return (
        <section>
            <div className="container">
                <div className="hourly-forecast-section">
                    <div className="section-top-bar">
                        {types.map(({ id, label }, index) => (
                            <button
                                key={index}
                                className={typeId === id ? 'hourly-button-active' : ''}
                                onClick={() => setTypeId(id)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    <HourlyDailySection 
                        data={typeId === 1 ? hourly : daily}
                        unitMeasure={unitMeasure}
                    />
                    {/* <div className="hourly-forecast">
                        {hourly && hourly.data.length > 0 && hourly.data.map(({ temperature, time }, index) => (
                            <div key={index} className="hourly-forecast-card">
                                <h6>
                                    {`${new Date(time * 1000).getHours()}:0${new Date(time * 1000).getMinutes()}`}
                                </h6>
                                <CloudyIcon />
                                <h5>{temperature}°</h5>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default HourlyForecast;