import React from 'react'
import { Link } from 'gatsby'

import heroStyles from '@styles/hero.module.css'

const Hero = () => {

    return (
        <div className={heroStyles.heroBg}>
            <div className={heroStyles.hero}>
                <div className={heroStyles.moonWrapper}>
                </div>
                
                <div className={heroStyles.headline}>
                    <p className={heroStyles.elevator} style={{textAlign: "left", fontSize: "clamp(1.2rem, 2vw, 1.5rem)", paddingLeft: "clamp(0.5rem, 2vw, 1rem)"}}>Hello, my name is</p>
                    <h1>Jean Tiston</h1>
                </div>
                <div className={heroStyles.block}>
                    <p className={heroStyles.elevator}>I’m a software engineer based in Manila focusing on creating stunning and functional websites, user interfaces and content that clearly reflects your brand. </p>
                </div>
                <div className={heroStyles.cta}>
                    <Link to='/#contact' className={heroStyles.button} >Get In Touch</Link>                    
                </div>
            </div>
           
            
        </div>
    )

    
}

export default Hero