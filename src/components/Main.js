import React from 'react'
import './Main.css'
import Logo from './../assets/React-icon.svg'
import Search from './../assets/search.svg'

const Main = () => {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="main-logo">
                    <img className="main-logo-img" src={Logo} alt="main-logo-img" />
                    <h1 className="title">React Weather App</h1>
                </div>
                <a href='https://github.com/Ivan-Lebedev' className="gh">GitHub</a>
            </header>

            <form className="main-form" action="submit">
                <input className="main-form-input" type="text" placeholder='Enter city name' />
                <button><img className="main-button" src={Search} alt="main-button" /></button>
            </form>

            <section className="main-content">
                <h2 className="city-name">Samara Oblast, RU</h2>
                <p className="date-now">Sunday, 7:09 PM, Clear Sky</p>
                <div className="weather-data">
                    <div className="weather-data-main-data">
                        <div className="icon"><img src="https://openweathermap.org/img/wn/01n@2x.png" alt="" /></div>
                        <div className="temperature">9°C</div>
                    </div>
                </div>
                <div className="addition-data">
                    <div className="addition-data-item">
                        <div className="addition-data-item-desc">Wind:</div>
                        <div className="addition-data-item-value">5.0m/s N</div>
                    </div>
                    <div className="addition-data-item">
                        <div className="addition-data-item-desc">Pressure:</div>
                        <div className="addition-data-item-value">1034hPa</div>
                    </div>
                    <div className="addition-data-item">
                        <div className="addition-data-item-desc">Humidity:</div>
                        <div className="addition-data-item-value">42%</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main