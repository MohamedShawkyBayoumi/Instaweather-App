import React from 'react'
import { ReactComponent as CloudyIcon } from '../assets/cloudy.svg';
import { weekDays, toCelsius } from '../utils';

const TodayForecast = ({ currently, daily, unitMeasure }) => {

    return (
        <section>
            <div className="container">
                {currently && Object.keys(currently).length > 0 && (
                    <div className="today-forecast-section">
                        <div className="left">
                            <h1>New Cairo</h1>
                            <h5>
                                {`${weekDays[new Date().getDay()]} ${new Date().getDate()}, ${new Date().getFullYear()}`}
                            </h5>
                            <CloudyIcon />
                            <h5>
                                {currently.summary}
                            </h5>
                        </div>
                        <div className="right">
                            <h1>{unitMeasure === 1 ? `${toCelsius(currently.temperature)}°`: `${Math.round(currently.temperature)}F`}</h1>
                            {daily && daily.data.length > 0 && (
                                <>
                                    {unitMeasure === 1 ? (
                                        <h4>
                                            {toCelsius(daily.data[0].temperatureHigh)}° / 
                                            <span>{toCelsius(daily.data[0].temperatureLow)}°</span>
                                        </h4>
                                    ) : (
                                        <h4>{Math.round(daily.data[0].temperatureHigh)}F / <span>{Math.round(daily.data[0].temperatureLow)}F</span></h4>
                                    )}
                                
                                    <h5>{daily.data[0].summary}</h5>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TodayForecast;