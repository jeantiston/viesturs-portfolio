import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'gatsby'

import navMenu from '@assets/navmenu.svg'
import closeMenu from '@assets/close.svg'

const Nav = () => {

    const navButton = {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "transparent",
        width: "100vw",
        position: "fixed",
        zIndex: "4"
    }

    const navStyle = {
        backgroundColor: "rgba(118, 86, 133, 0.9)",
        paddingTop: "100px",
        height: "100vh",
        position: "fixed",
        zIndex: "3",
        left: 0,
        width: "100vw",
        alignItems: "center",
        display: "none",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "hidden"
    }

    const button = {
        paddingRight: "20px",
        width: "40px",
        height: "40px",
        paddingTop: "20px"
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
                    <li><Link to="/#about">About</Link></li>
                    <li><Link to="/#skills">Skills</Link></li>
                    <li><Link to="/#projects">Projects</Link></li>
                    <li><Link to="/#contact">Contact</Link></li>
                    <li><button>Download Resume</button></li>
                </ul>
            </motion.nav>
            <div style={navButton}>
                { showNav ? <img style={button} src={closeMenu} onClick={() => {handleClick("close")}} /> : <img style={button} src={navMenu} onClick={() => {handleClick("open")}} />}
            </div>
        </div>
    )
}

export default Nav