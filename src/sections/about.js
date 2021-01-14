import React from 'react'

import { motion } from 'framer-motion'

import SectionHeader from '@components/sectionheader'
import aboutStyles from '@styles/about.module.css'

import profilePhoto from '@assets/profile_photo.jpg'

const aboutVariants = {
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

const About = () => {

    return (
        <div id="about" style={{position: "relative", zIndex: 4}}> 
        <SectionHeader name="Background" />
        <div className={aboutStyles.wrapwrap} >
            <motion.div className={aboutStyles.wrapperStyle}
                variants={aboutVariants}
                initial="init"
                animate="visible"
            >
                <motion.div className={aboutStyles.about}
                    variants={aboutVariants}
                >
                    <p className={aboutStyles.aboutP}>
                        I like working on visually appealing projects whether that’s a website, application interface, or marketing content. My ideal work is one that utilizes both my creative design and problem-solving skills.
                    </p>
                    <p className={aboutStyles.aboutP}>
                        After graduating from University of the Philippines with a Computer Engineering degree, I worked at FactSet Philippines as a Software Engineer for 3 years.
                    </p>
                    <p className={aboutStyles.aboutP}>
                        I’m currently working as a freelance social media and campaign manager while continuously exercising my programming and web development skills.
                    </p>
                    
                </motion.div>
                <motion.img src={profilePhoto} alt="jean" className={aboutStyles.photo} 
                    variants={aboutVariants}
                />
            </motion.div>
            </div>
        </div>
    )
}

export default About