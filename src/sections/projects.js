import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import { motion } from 'framer-motion'

import projectStyle from '@styles/project.module.css'

import Card from '@components/card'
import SectionHeader from '@components/sectionheader'

const projectsVariants = {
  init: {
      opacity: 0,
      x: '-2vw'
  },
  visible: {
      opacity: 1,
      x: 0,
      transition: {
          type: 'tween',
          duration: 0.6,
          ease: "easeIn",
          delayChildren: 0.5,
          staggerChildren: 0.3
      }
  }
}

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
            
            <motion.div className={projectStyle.cards} 
              variants={projectsVariants}
              initial="init"
              animate="visible"
            >
                { projectsHtml }
                
            </motion.div>
        </div>

    )
}

export default Projects