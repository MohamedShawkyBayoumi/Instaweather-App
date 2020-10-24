import React from 'react'
import { ReactComponent as CloudyIcon } from '../assets/cloudy.svg';

const TodayForecast = ({ currently }) => {
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
                                Cloudy
                            </h5>
                        </div>
                        <div className="right">
                            <h1>{currently.temperature}°</h1>
                            <h4>81° / <span>63°</span></h4>
                            <h5>{currently.summary}</h5>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TodayForecast;