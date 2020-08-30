import React from 'react'

import cardStyle from '@styles/card.module.css'

import githubIcon from '@assets/038-github.svg'
import webIcon from '@assets/020-web.svg'

const Card = ({img, title, link, github, desc, skills}) => {

    const skillChips = skills.map(skill => {
        return (<div className={cardStyle.techTag} ><p> { skill } </p></div>)
    })

    return (
        <div className={cardStyle.card}>
            <img alt={title} src={img} className={cardStyle.screencap} />
            <div className={cardStyle.titleIcons}>
                <h4 className={cardStyle.projectTitle}>{title}</h4>
                <div className={cardStyle.projectIcons}>
                    <a href={link} ><img src={webIcon} alt="go to website" className={cardStyle.projectIcon} /></a>
                    <a href={github}><img src={githubIcon} alt="go to source code" className={cardStyle.projectIcon} /></a>
                </div>
            </div>
            <p className={cardStyle.projectDesc}>{ desc }</p>
            <div className={cardStyle.techTags} >
                { skillChips }
            </div>
        </div>
    )
}

export default Card