import React from 'react'
import './index.css'
import LearnMoreBtn from '../LearnMoreBtn'
import GradientLine from '../GradientLine'

function GetStartedBlock() {
    return(
        <div className="scnd-section-wrapper">
            <h2>Congue imperdiet</h2>
            <GradientLine/>
            <p className="scnd-header">Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere.
             Nulla massa urna, fermentum eget quam aliquet.</p>
             <div className="buttons-container">
                <button className="get-started-btn">Get Started</button>
                <LearnMoreBtn/>
             </div>
        </div>
    )
}

export default GetStartedBlock