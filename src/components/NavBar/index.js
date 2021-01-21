import React from 'react'
import './index.css'

function TopBar() {
    const topbarList = ['Introduction', 'First Section', 'Second Section', 'Get Started']

    return (
        <div className="topbar-wrapper">
            { topbarList.map((item) => (
                <button className="topbar-btn">{item}</button>
            ))}
        </div>
    )
}

export default TopBar