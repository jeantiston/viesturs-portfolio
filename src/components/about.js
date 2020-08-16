import React from 'react'
import SectionHeader from './sectionheader'

import profilePhoto from '../assets/profile_photo.jpg'

const About = () => {
    const aboutStyles = {
        color: "#F3C2D8",
        margin: "25px"
    }

    const pStyles = {
        marginBottom: "10px"
    }

    const photoStyle = {
        borderRadius: "100px",
        width: "200px",
        height: "200px"
    }

    const wrapperStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    return (
        <div style={{position: "relative"}}> 
        <SectionHeader name="Background" />
            <div style={wrapperStyle}>
                <div style={aboutStyles}>
                    <p style={pStyles}>
                        I’m a software engineer that focuses on creating beautiful and functional websites that clearly conveys your brand
                    </p>
                    <p style={pStyles}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Vitae turpis massa sed elementum. 
                    </p>
                    <p style={pStyles}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt faucibus.
                    </p>
                </div>
                <img src={profilePhoto} alt="profile photo" style={photoStyle} />
            </div>
        </div>
    )
}

export default About