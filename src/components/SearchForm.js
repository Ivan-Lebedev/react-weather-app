import React from 'react'
import Search from './../assets/search.svg'

const SearchForm = ({ apiCall }) => {
    return (
        <form onSubmit={apiCall} className="main-form">
            <input className="main-form-input" type="text" placeholder='Enter city name' />
            <button><img className="main-button" src={Search} alt="main-button" /></button>
        </form>
    )
}

export default SearchForm