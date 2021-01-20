import React from 'react'
import './index.css'

function Block({children}) {
    return (
        <div className="wrapper-block">
            {children}
        </div>
    )
}

export default Block