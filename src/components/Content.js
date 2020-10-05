import React from 'react'
import Error from './Error'

const Content = ({ location, weather, date, error }) => {
    const { city, country } = location
    const { temp, pressure, humidity, sky, icon, wind } = weather
    const { timeShift } = date
    const urlIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`

    //UTC-time
    const utc = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000)    
    //Location-time
    const dateNow = new Date(Date.parse(utc) + timeShift * 1000)
    const locationTime = `${dateNow.toDateString()} - ${dateNow.toLocaleTimeString()}`    

    const mainContent = location
        ? <section className="main-content">
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
                    <div className="addition-data-item-value">{wind}m/s</div>
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
        : <section className="main-content">
            <p className="no-data-input">Enter the name of the city to get started!</p>
        </section>
    return (
        error
            ? <Error error={error} />
            : mainContent
    )
}

export default Content