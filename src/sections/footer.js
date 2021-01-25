import React from 'react'

import footerStyles from '@styles/footer.module.css'

import mountainPhoto from '@assets/mountain-footer.png'
import githubIcon from '@assets/038-github-white.svg'
import linkedinIcon from '@assets/045-linkedin.svg'
import twitterIcon from '@assets/043-twitter.svg'
import instagramIcon from '@assets/025-instagram.svg'



const Footer = () => {
    return (
        <div className={footerStyles.footerBg}>
            {/* <h1>Footer</h1> */}
            <img className={footerStyles.mountain} id="mountain-footer" src={mountainPhoto} />
            <div className={footerStyles.icons}>
            <a href="https://github.com/jeantiston" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" className={footerStyles.footerIcon} /></a>
            <a href="https://www.linkedin.com/in/jeantiston/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" className={footerStyles.footerIcon} /></a>
            <a href="https://www.instagram.com/jeloufish/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" className={footerStyles.footerIcon} /></a>
            <a href="https://twitter.com/jeanlouisedev" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="Twitter" className={footerStyles.footerIcon} /></a>
            </div> 
            <div className={footerStyles.center}>
                <div className={footerStyles.credits}>
                    <div>
                        <p>DESIGNED AND BUILT BY:</p>
                        <a href="https://github.com/jeantiston/viesturs-portfolio"><b>Jean Tiston</b></a>
                    </div>
                    <div>
                        <p> HERO PHOTO BY:</p>
                        <a href="https://unsplash.com/@ingmarr"><b>Ingmar</b></a>
                    </div>
                    <div>
                        <p>ICONS BY:</p>
                        <a href="https://www.flaticon.com/authors/freepik"><b>Freepik</b></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer