import React from 'react'

import SectionHeader from './sectionheader'
import SkillsList from './skillslist'

import devIcon from '../assets/development.svg'
import desIcon from '../assets/design.svg'

const Skills = () => {
    const devSkills = ['Javascript', 'HTML', 'CSS', 'Flask', 'Javascript', 'HTML', 'CSS', 'Flask']
    const desSkills = ['Figma', 'Prototyping', 'Photoshop', 'Lightroom']

    

    return (
        <div id="skills">
            <SectionHeader name="Skills" />
            <SkillsList title="Development" skills={devSkills} icon={devIcon} />
            <SkillsList title="Design" skills={desSkills} icon={desIcon} />
        </div>
    )
}

export default Skills