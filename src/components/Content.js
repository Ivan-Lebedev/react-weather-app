import React from 'react'

const Content = ({ location, weather, date }) => {
    const { city, country } = location
    const { temp, pressure, humidity, sky, icon, wind, windDirection } = weather
    const { locationTime } = date
    const urlIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`

    return (
        <section className="main-content">
            <h2 className="city-name">{city}, {country}</h2>
            <p className="date-now">{locationTime}, {sky}</p>
            <div className="weather-data">
                <div className="weather-data-main-data">
                    <div className="icon"><img src={urlIcon} alt="icon" /></div>
                    <div className="temperature">{temp}°C</div>
                </div>
            </div>
            <div className="addition-data">
                <div className="addition-data-item">
                    <div className="addition-data-item-desc">Wind:</div>
                    <div className="addition-data-item-value">{wind}m/s {windDirection}</div>
                </div>
                <div className="addition-data-item">
                    <div className="addition-data-item-desc">Pressure:</div>
                    <div className="addition-data-item-value">{pressure}hPa</div>
                </div>
                <div className="addition-data-item">
                    <div className="addition-data-item-desc">Humidity:</div>
                    <div className="addition-data-item-value">{humidity}%</div>
                </div>
            </div>
        </section>
    )
}

export default Content