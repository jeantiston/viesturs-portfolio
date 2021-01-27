import React from 'react'

import Fade from 'react-reveal/Fade';

import SectionHeader from '@components/sectionheader'
import aboutStyles from '@styles/about.module.css'

import profilePhoto from '@assets/profile_photo.jpg'

const About = () => {

    return (
        <div id="about" style={{position: "relative", zIndex: 4}}> 
        <SectionHeader name="Background" />
        <div className={aboutStyles.wrapwrap} >
        
            <div className={aboutStyles.wrapperStyle}>
                <Fade left cascade>
                    <div className={aboutStyles.about}>
                        
                        <p className={aboutStyles.aboutP}>
                            I like working on visually appealing projects whether that’s a website, application interface, or marketing content. My ideal work is one that utilizes both my creative design and problem-solving skills.
                        </p>
                        <p className={aboutStyles.aboutP}>
                            After graduating from University of the Philippines with a Computer Engineering degree, I worked at FactSet Philippines as a Software Engineer for 3 years.
                        </p>
                        <p className={aboutStyles.aboutP}>
                            I’m currently working as a freelance social media and campaign manager while continuously exercising my programming and web development skills.
                        </p>
                    </div>
                </Fade>
                <Fade left>
                    <img src={profilePhoto} alt="jean" className={aboutStyles.photo}/>
                </Fade>
                
            </div>
            
            </div>
        </div>
    )
}

export default About