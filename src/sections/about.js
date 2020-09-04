import React from 'react'

import SectionHeader from '@components/sectionheader'
import aboutStyles from '@styles/about.module.css'

import profilePhoto from '@assets/profile_photo.jpg'

const About = () => {

    return (
        <div id="about" style={{position: "relative"}}> 
        <SectionHeader name="Background" />
            <div className={aboutStyles.wrapperStyle}>
                <div className={aboutStyles.about}>
                    <p className={aboutStyles.aboutP}>
                        I’m a software engineer that focuses on creating beautiful and functional websites that clearly conveys your brand
                    </p>
                    <p className={aboutStyles.aboutP}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Vitae turpis massa sed elementum. 
                    </p>
                    <p className={aboutStyles.aboutP}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt faucibus.
                    </p>
                </div>
                <img src={profilePhoto} alt="jean" className={aboutStyles.photo} />
            </div>
        </div>
    )
}

export default About