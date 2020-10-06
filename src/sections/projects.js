import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import projectStyle from '@styles/project.module.css'

import Card from '@components/card'
import SectionHeader from '@components/sectionheader'

const Projects = () => {

    const data = useStaticQuery(graphql`
        query { 
            allContentfulProjects {
                edges {
                  node {
                    id
                    title
                    external
                    github
                    description {
                      description
                    }
                    techStack
                    screenshot {
                      file {
                        url
                      }
                    }
                  }
                }
            }
        }
    `)


    const projectEdges = data.allContentfulProjects.edges

    const projectsHtml = projectEdges.map( node => {
        const project = node.node
        return (
            <Card img={project.screenshot.file.url} 
                    title={project.title}
                    link={project.external}
                    github={project.github}
                    desc={project.description.description}
                    skills={project.techStack}  
                    id={project.id}
            />
        )
    })


    return (
        <div id="projects">
            <SectionHeader name="Projects" />
            
            <div className={projectStyle.cards} >
                { projectsHtml }
                
            </div>
        </div>

    )
}

export default Projects