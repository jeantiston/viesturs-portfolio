import React from 'react'
import { Link } from 'gatsby'

import { motion } from 'framer-motion'

import heroStyles from '@styles/hero.module.css'

const heroVariants = {
    init: {
        opacity: 0,
        x: '-2vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'tween',
            duration: 0.6,
            ease: "easeIn",
            delayChildren: 0.5,
            staggerChildren: 0.3
        }
    }
}

const Hero = (props) => {

    return (
        <div className={heroStyles.heroBg}>
            <motion.div className={heroStyles.hero}
                variants={heroVariants}
                initial="init"
                animate={props.start}
            >
                <div className={heroStyles.moonWrapper}>
                </div>
                
                <motion.div className={heroStyles.headline}
                    variants={heroVariants}
                >
                    <p className={heroStyles.elevator} style={{textAlign: "left", fontSize: "clamp(1.2rem, 2vw, 1.5rem)", paddingLeft: "clamp(0.5rem, 2vw, 1rem)"}}>Hello, my name is</p>
                    <h1>Jean Tiston</h1>
                </motion.div>
                <motion.div className={heroStyles.block}
                    variants={heroVariants}
                >
                    <p className={heroStyles.elevator}>I’m a web developer based in Manila focused on creating stunning and responsive websites and applications that would help your business and your brand. </p>
                </motion.div>
                <motion.div className={heroStyles.cta}
                    variants={heroVariants}
                >
                    <Link to='/#contact' className={heroStyles.button} >Get In Touch</Link>                    
                </motion.div>
            </motion.div>
           
            
        </div>
    )

    
}

export default Hero