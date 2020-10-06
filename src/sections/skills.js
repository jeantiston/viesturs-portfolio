import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import SectionHeader from '@components/sectionheader'
import SkillsList from '@components/skillslist'

import skillStyle from '@styles/skills.module.css'

// import devIcon from '@assets/development.svg'
import resumeIcon from '@assets/resume.svg'

const Skills = () => {

    const data = useStaticQuery(graphql`
        query {          
            allContentfulSkills {
                edges {
                    node {
                        id
                        title
                        skills
                        icon {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
    `)

    const skillsEdges = data.allContentfulSkills.edges
    //console.log(skillsEdges)

    const skillsHtml = skillsEdges.map( node => {
        
        const skill = node.node
        return <SkillsList title={skill.title} skills={skill.skills} icon={skill.icon.file.url} id={skill.id} />
    })

    return (
        <div id="skills" style={{position: "relative"}}>
            <SectionHeader name="Skills" />
            <div className={skillStyle.listlist}>
                { skillsHtml }
                <a href="https://drive.google.com/file/d/1RTMy8t8rwMLprahJVLvMNgUiZPwPk3oE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <SkillsList title="View My Resume" skills={[]} icon={resumeIcon} />
                </a>
            </div>
        </div>
    )
}

export default Skills