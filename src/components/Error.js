import React from 'react'

const Error = ({ error }) => {
    return (
        <section className="main-content">
            <p className="no-data-input">{error}</p>
        </section>
    )
}

export default Error