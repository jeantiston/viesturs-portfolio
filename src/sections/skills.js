import React from 'react'

import SectionHeader from '@components/sectionheader'
import SkillsList from '@components/skillslist'

import skillStyle from '@styles/skills.module.css'

import devIcon from '@assets/development.svg'
import desIcon from '@assets/design.svg'

const Skills = () => {
    const devSkills = ['Javascript', 'HTML', 'CSS', 'Flask', 'Javascript', 'HTML', 'CSS', 'Flask']
    const desSkills = ['Figma', 'Prototyping', 'Photoshop', 'Lightroom']
    const desSkills = ['Figma', 'Prototyping', 'Photoshop', 'Lightroom']

    

    return (
        <div id="skills" style={{position: "relative"}}>
            <SectionHeader name="Skills" />
            <div className={skillStyle.listlist}>
                <SkillsList title="Development" skills={devSkills} icon={devIcon} />
                <SkillsList title="Design" skills={desSkills} icon={desIcon} />
                <SkillsList title="Design" skills={desSkills} icon={desIcon} />
                <SkillsList title="Design" skills={desSkills} icon={desIcon} />
            </div>
        </div>
    )
}

export default Skills