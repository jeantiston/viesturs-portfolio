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
                    <p>Hello, my name is</p>
                    <h1>Jean Tiston</h1>
                </div>
                <div className={heroStyles.block}>
                    <p>I’m a software engineer that focus on creating beautiful and functional websites that clearly reflects your brand</p>
                </div>
                <div className={heroStyles.block}>
                    <button>Get In Touch</button>
                    
                </div>
            </div>
           
            
        </div>
    )

    
}

export default Hero