import React from 'react'
import './index.css'
import LearnMoreBtn from '../LearnMoreBtn'
import GradientLine from '../GradientLine'


function IntroBlock() {
    return (
        <div className="intro-block-wrapper">
            <div className="intro-txt-wrapper">
                <h2>Ipsum sed adipiscing</h2>
                <GradientLine/>
                <p>
                Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna<br/>
                adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. <br/>
                Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
                </p>
                <LearnMoreBtn/>
            </div>
            <span>
                <img 
                    src={process.env.PUBLIC_URL + '/phone.jpg'}
                    alt="phone"
                    className="phone-img"
                >
                </img>
            </span>
        </div>
    )
}

export default IntroBlock