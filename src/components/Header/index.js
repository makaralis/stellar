import React from 'react'
import './index.css'

function Header() {
    return (
        <div className="main-header-wrapper">
            <img
                src={process.env.PUBLIC_URL + '/logo.png'} 
                alt="logo"
                className="logo">
            </img>
            <h1>Stellar</h1>
            <p>Just another free, fully responsive site template <br/> built by @ajlkn for HTML5 UP.</p>
        </div>
    )
}

export default Header