import React from 'react'
import { ReactComponent as CloudyIcon } from '../assets/cloudy.svg';
import { toCelsius, weekDays } from '../utils';

const HourlyDailySection = ({data, unitMeasure}) => {
    console.log('data', data)
    return (
        <div className="hourly-forecast">
            {data && data.data.length > 0 && data.data.map(({ temperature, time, temperatureLow, temperatureHigh }, index) => (
                <div key={index} className="hourly-forecast-card">
                    <h6>
                        {temperatureLow ? 
                            `${weekDays[new Date().getDay()]} ${new Date().getDate()}, ${new Date().getFullYear()}`
                            :
                            `${new Date(time * 1000).getHours()}:0${new Date(time * 1000).getMinutes()}`
                        }
                    </h6>
                    <CloudyIcon />
                    {
                        temperatureLow ? (
                            <h5>{unitMeasure === 1 ? `${toCelsius(temperatureLow)}°/${Math.round(temperatureHigh)}°`: `${Math.round(temperatureLow)}F/${Math.round(temperatureHigh)}F`}</h5>
                        ) : (
                            <h5>{unitMeasure === 1 ? `${toCelsius(temperature)}°`: `${temperature}F`}</h5>
                        )
                    }
                </div>
            ))}
        </div>
    )
}

export default HourlyDailySection;