import React from 'react'
import Logo from './../assets/React-icon.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="main-logo">
                <img className="main-logo-img" src={Logo} alt="main-logo-img" />
                <h1 className="title">React Weather App</h1>
            </div>
            <a href='https://github.com/Ivan-Lebedev' className="gh">GitHub</a>
        </header>
    )
}

export default Header