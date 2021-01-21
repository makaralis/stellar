import React from 'react'
import './index.css'
import GradientLine from '../GradientLine'
import LearnMoreBtn from '../LearnMoreBtn'

function FirstSectionBlock() {
    const featuresList = [{ src: '/code.png', alt: 'code', header: 'Ipsum consequat', txt: 'Sed lorem amet ipsum doloret amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'},
    { src: '/copy.png', alt: 'copy', header: 'Amed sed feugiat', txt: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'},
    { src: '/diamond.png', alt: 'diamond', header: 'Dolor nullam', txt: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'}]


    return (
        <div className="fst-section-wrapper">
            <h2>Magna veroeros</h2>
            <GradientLine/>
            <div className="features">
                { featuresList.map((item, index) => {
                    return (
                        <div className={'feature' + (!index ?  ' fst-feature' : '')}>
                            <div className="border-outside">
                                <div className="border-inside">
                                    <img
                                        src={process.env.PUBLIC_URL + item.src}
                                        alt={item.alt}
                                    >
                                    </img>
                                </div>
                            </div>
                        <h3>{item.header}</h3>
                        <p className="paragraph">{item.txt}</p>
                        </div>
                    )
                })}
            </div>
            <LearnMoreBtn/>
        </div>
    )
}

export default FirstSectionBlock