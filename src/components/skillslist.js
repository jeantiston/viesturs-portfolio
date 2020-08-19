import React from 'react'

import SkillsHeader from './skillsheader'

const SkillsList = ({title, icon, skills}) => {

    const skillsList = skills.map( skill => {
        return <li>{skill}</li>
    })

    return (
        <div>
            <SkillsHeader name={title} icon={icon} />
            <ul style={{
                alignItems: "flex-start",
                maxHeight: "300px",
                flexWrap: "wrap"
            }}>
                { skillsList }
            </ul>
        </div>
    )
}

export default SkillsList