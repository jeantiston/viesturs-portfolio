import React from "react"
import { SemipolarLoading } from 'react-loadingg';

import loaderStyles from '@styles/loader.module.css'

const Loader = (props) => {
    return (
        <div>
        { props.loaded ? (<div></div>) :
            <div className={loaderStyles.loader}>
                <SemipolarLoading color="rgba(243,194,216,1)" size="large" />
            </div>
        }
        </div>
    )
}

export default Loader