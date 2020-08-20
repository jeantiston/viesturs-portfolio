import React from 'react'

import layoutStyles from '@styles/layout.module.css'
import Nav from '@components/nav'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Nav />
            <div className={layoutStyles.content}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout