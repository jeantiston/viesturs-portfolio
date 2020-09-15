import React from 'react'

import heroStyles from '@styles/hero.module.css'

const Hero = () => {

    return (
        <div className={heroStyles.heroBg}>
            <div className={heroStyles.hero}>
                <div className={heroStyles.moonWrapper}>
                    {/* <Img className={heroStyles.moon} fluid={data.moon.childImageSharp.fluid} alt="moon"/> */}
                </div>
                <div className={heroStyles.headline}>
                    <p className={heroStyles.elevator} style={{fontSize: "clamp(1.2rem, 2vw, 1.5rem)", paddingLeft: "clamp(0.5rem, 2vw, 1rem)"}}>Hello, my name is</p>
                    <h1>Jean Tiston</h1>
                </div>
                <div className={heroStyles.block}>
                    <p className={heroStyles.elevator}>I’m a software engineer that focus on creating beautiful and functional websites that clearly reflects your brand. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                </div>
                <div className={heroStyles.cta}>
                    <button>Get In Touch</button>
                    
                </div>
            </div>
           
            
        </div>
    )

    
}

export default Hero