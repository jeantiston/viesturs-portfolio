import React from 'react'

import projectStyle from '@styles/project.module.css'

import Card from '@components/card'
import SectionHeader from '@components/sectionheader'
import bootcampImg from '@assets/bootcampscreen.png'

const Projects = () => {


    return (
        <div id="projects">
            <SectionHeader name="Projects" />
            <div className={projectStyle.card} >
                <Card img={bootcampImg} 
                    title="Bootcamp Testimonial Page"
                    link="/"
                    github="/"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Vitae turpis massa sed elementum."
                    skills={["HTML", "CSS", "Javascript"]}  
                />

                <Card img={bootcampImg} 
                    title="Bootcamp Testimonial Page"
                    link="/"
                    github="/"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Vitae turpis massa sed elementum."
                    skills={["HTML", "CSS", "Javascript"]} 
                />

                <Card img={bootcampImg} 
                    title="Bootcamp Testimonial Page"
                    link="/"
                    github="/"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Vitae turpis massa sed elementum."
                    skills={["HTML", "CSS", "Javascript"]} 
                />
            </div>
        </div>

    )
}

export default Projects