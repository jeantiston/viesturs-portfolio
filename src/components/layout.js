import React from 'react'

import layoutStyles from './layout.module.css'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            
            <div className={layoutStyles.content}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout