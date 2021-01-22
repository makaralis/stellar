import React from 'react' 
import './index.css'
import GradientLine from '../GradientLine'
import LearnMoreBtn from '../LearnMoreBtn'

function SecondSectionBlock() {
    const itemsList = [{ src: '/share.png', alt: 'share', num: '5,120'}, 
    { src: '/folder.png', alt: 'folder', num: '8,192'}, 
    { src: '/graph.png', alt: 'graph', num: '2,048'},
    { src: '/pc.png', alt: 'pc', num: '4,096'},
    { src: '/diamondWhite.png', alt: 'diamond', num: '1,024'}]

    return (
        <div className="scnd-section-wrapper">
            <h2>Ipsum consequat</h2>
            <GradientLine/>
            <p className="scnd-header">Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere.
             Nulla massa urna, fermentum eget quam aliquet.</p>
            <div className="menu-bar">
                { itemsList.map((item) => {
                    return(
                        <div className="item">
                            <img
                                src={process.env.PUBLIC_URL + item.src}
                                alt={item.alt}
                            >
                            </img>
                            <p>{item.num}</p>
                        </div>
                    )
                })}
            </div>
            <div className="p-container">
                <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu 
                    faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, 
                    fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis 
                    diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar 

                    faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. 
                    Integer eget purus nec nulla mattis et accumsan ut magna libero. 
                    Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. 
                    Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare 
                    dui curabitur lacinia.</p>
            </div>
            <LearnMoreBtn/>
        </div>
    )
}

export default SecondSectionBlock