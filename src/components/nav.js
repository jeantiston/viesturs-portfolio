import React from 'react'
import { motion } from 'framer-motion';

import navMenu from '../assets/navmenu.svg'
import closeMenu from '../assets/close.svg'

const Nav = () => {

    const navButton = {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#765685",
        height: "80px",
        width: "100vw",
        position: "relative",
        zIndex: "2"
    }

    const navStyle = {
        backgroundColor: "rgba(118, 86, 133, 0.9)",
        paddingTop: "100px",
        height: "100%",
        position: "fixed",
        zIndex: "3",
        top: "5vh",
        left: 0,
        width: "100%",
        alignItems: "center",
        display: "none",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "hidden"
    }

    const button = {
        paddingRight: "20px",
        width: "40px",
        height: "40px"

    }

    const closeButton = {
        left: "324px",
        top: "17px"
    }



    const [showNav, setShowNav] = React.useState(0)

    function handleClick(cmd){
        if( cmd === "open" ){
            console.log(document.getElementsByTagName("nav")[0].style.display)
            document.getElementsByTagName("nav")[0].style.display = 'flex'
            setShowNav(1)
            document.body.style.overflow = 'hidden'
        }
        else {
            setShowNav(0)
            document.getElementsByTagName("nav")[0].style.display = 'none'
            document.body.style.overflow = 'auto'
        }
    }

    

    return (
        <div>
            <motion.nav style={navStyle} animate={{ opacity: showNav }} initial={{ opacity: 0 }} transition={{ opacity: {duration: 0.3} }}>

                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><button>Download Resume</button></li>
                </ul>
            </motion.nav>
            <div style={navButton}>
                { showNav ? <img style={button} src={closeMenu} onClick={() => {handleClick("close")}} /> : <img style={button} src={navMenu} onClick={() => {handleClick("open")}} />}
                {/* <motion.img style={openButton} src={navMenu} alt="nav menu" onClick={() => {handleClick("open")}} animate={{ opacity: showNav ? 0 : 1 }} initial={{ opacity: 1 }} transition={{ opacity: {duration: 0.1} }} />
                <motion.img style={closeButton} src={closeMenu} alt="close menu" onClick={() => {handleClick("close")}} animate={{ opacity: showNav }} initial={{ opacity: 1 }} transition={{ opacity: {duration: 0.1} }} /> */}
            </div>
        </div>
    )
}

export default Nav