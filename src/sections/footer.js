import React from 'react'

import footerStyles from '@styles/footer.module.css'

import mountainPhoto from '@assets/mountain-footer.png'

const Footer = () => {
    return (
        <div className={footerStyles.footerBg}>
            {/* <h1>Footer</h1> */}
            <img id="mountain-footer" src={mountainPhoto} />
            <div className={footerStyles.icons}>icons</div> 
            <div className={footerStyles.credits}>
                <div>
                    <p>Designed and built by:</p>
                    <a href="#"><b>Jean Tiston</b></a>
                </div>
                <div>
                    <p>Mountain photo by:</p>
                    <a href="https://unsplash.com/@ingmarr"><b>Ingmar</b></a>
                </div>
                <div>
                    <p>Icons made by:</p>
                    <a href="https://www.flaticon.com/authors/freepik"><b>Freepik</b></a>
                </div>
            </div>

        </div>
    )
}

export default Footer