import React, { useState } from 'react';
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
                </div>
            </div>
        </section>
    )
}

export default HourlyForecast;