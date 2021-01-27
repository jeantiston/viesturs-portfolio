import React from 'react'
import Fade from 'react-reveal/Fade';

import SkillsHeader from '@components/skillsheader'

const SkillsList = ({title, icon, skills}) => {

    let skillsList = []

    if (skills) {
        skillsList = skills.map( skill => {
            return <li>{skill}</li>
        })
    }

    return (
        <div >
            <SkillsHeader name={title} icon={icon} />
            <Fade left cascade>
            <ul style={{
                alignItems: "flex-start",
                maxHeight: "300px",
                flexWrap: "wrap"
            }}>
                { skillsList }
            </ul>
            </Fade>
        </div>
    )
}

export default SkillsList