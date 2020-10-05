import React, { useState } from 'react'
import './Main.css'
import Header from './Header'
import SearchForm from './SearchForm'
import Content from './Content'
import axios from 'axios'



const Main = () => {
    const [location, setLocation] = useState('')
    const [weather, setWeather] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState('')

    const apiCall = async e => {
        e.preventDefault()

        const location = e.target.elements.location.value

        if (!location) return setError('Please enter the name of the city')

        const API_KEY = 'a5163f5e55376d613d9d607518cb87fa'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const request = axios.get(url)
        const response = await request
            .catch(() => {
                return setError('Location not found')
            })
        if (!response) return

        setLocation({
            city: response.data.name,
            country: response.data.sys.country
        })
        setWeather({
            temp: response.data.main.temp,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            sky: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            windDirection: response.data.wind.deg,
        })
        setDate({
            timeShift: response.data.timezone
        })
        setError('')
        console.log(response)
    }


    return (
        <div className="wrapper">
            <Header />
            <SearchForm apiCall={apiCall} />
            <Content
                location={location}
                weather={weather}
                date={date}
                error={error} />
        </div>
    )
}

export default Main