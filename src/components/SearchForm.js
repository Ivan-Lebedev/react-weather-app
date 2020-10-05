import React from 'react'
import Search from './../assets/search.svg'

const SearchForm = ({ apiCall }) => {
    return (
        <form onSubmit={apiCall} className="main-form">
            <input name="location" className="main-form-input" type="text" placeholder='Enter city name' />
            <button className="main-form-input-btn">
                <img className="main-button" src={Search} alt="main-button" />
            </button>
        </form>
    )
}

export default SearchForm