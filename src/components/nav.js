import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'gatsby'

import navMenu from '@assets/navmenu.svg'
import closeMenu from '@assets/close.svg'

import navStyles from '@styles/nav.module.css'

const navVariants = {
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

const Nav = () => {

    const menuItems = [
        {
            title: 'About',
            slug: '/#about'
        },
        {
            title: 'Skills',
            slug: '/#skills'
        },
        {
            title: 'Projects',
            slug: '/#projects'
        },
        {
            title: 'Contact',
            slug: '/#contact'
        }
    ]

    const menuHtml = menuItems.map( item => {
    return <li><Link to={item.slug}>{item.title}</Link></li>
    } )


    const [showNav, setShowNav] = React.useState(0)
    const [lastYPos, setLastYPos] = React.useState(0)
    const [shouldShowNav, setShouldShowNav] = React.useState(true)

    React.useEffect(() => {
        function handleScroll() {
            // console.log('scrolled')
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;

            setShouldShowNav(isScrollingUp)
            setLastYPos(yPos)

        }

        window.addEventListener('scroll', handleScroll, false)

        return () => {
            window.addEventListener('scroll', handleScroll, false)
        }

    }, [lastYPos])

    

    function handleClick(cmd){
        if( cmd === "open" ){
            // console.log(document.getElementsByTagName("nav")[0].style.display)
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
            <motion.div className={`${navStyles.menuBg} ${navStyles.active}`}
                initial={{ y: "0" }}
                animate={{ y: shouldShowNav ? "0" : "-10vh" }}
                transition={{ duration: 0.05, type: 'tween' }}
            >
                <motion.ul className={navStyles.desktopMenu}
                    variants={navVariants}
                    initial="init"
                    animate="visible"
                >
                        { menuHtml }
                        <li><a href="https://drive.google.com/file/d/1RTMy8t8rwMLprahJVLvMNgUiZPwPk3oE/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </motion.ul>
            </motion.div>
            <motion.nav className={navStyles.navStyle} animate={{ opacity: showNav }} initial={{ opacity: 0 }} transition={{ opacity: {duration: 0.3} }}>

                <ul className={navStyles.mobileMenu}>
                    { menuHtml }
                    <li><a href="https://drive.google.com/file/d/1RTMy8t8rwMLprahJVLvMNgUiZPwPk3oE/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>

                
            </motion.nav>
            <div className={navStyles.navButton}>
                { showNav ? <img alt="close button" className={navStyles.button} src={closeMenu} onClick={() => {handleClick("close")}} /> : <img alt="nav menu" className={navStyles.button} src={navMenu} onClick={() => {handleClick("open")}} />}
            </div>
        </div>
    )
}

export default Nav