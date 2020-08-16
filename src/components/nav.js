import React from 'react'

import navMenu from '../assets/navmenu.svg'
import closeMenu from '../assets/close.svg'

const Nav = () => {

    const navButton = {
        display: "flex",
        justifyContent: "flex-end",
        position: "absolute",
        top: "20px",
        right: "20px"
    }

    const navStyle = {
        backgroundColor: "#765685",
        backgroundOpacity: "95%",
        height: "100%",
        position: "fixed",
        zIndex: "3",
        top: "5vh",
        left: 0,
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
    }

    return (
        <div>
            <div style={navButton}>
                <img src={navMenu} alt="nav menu" />
            </div>
            <nav style={navStyle}>
                <div style={navButton}>
                    <img src={closeMenu} alt="nav menu" />
                </div>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                    <button>Download Resume</button>
                </ul>
            </nav>
        </div>
    )
}

export default Nav