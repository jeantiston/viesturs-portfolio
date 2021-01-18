import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { motion } from 'framer-motion';
import Img from "gatsby-image"

import Layout from '@components/layout'
import Head from '@components/head'
import Hero from '@sections/hero'
import About from '@sections/about'
import Skills from '@sections/skills'
import Projects from '@sections/projects'
import Contact from '@sections/contact'
import Footer from '@sections/footer'

import indexStyles from '@styles/index.module.css'

export default function Home() {
  const data = useStaticQuery(graphql`
        query Images1     {
            moon: file(relativePath: {eq: "moon.png"}) {
                id
                childImageSharp {
                  fixed(width: 120, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
            moon2: file(relativePath: {eq: "moon.png"}) {
              id
              childImageSharp {
                fixed(width: 100, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
          }

          mountain2: file(relativePath: {eq: "mountain.png"}) {
            id
            childImageSharp {
              fixed(width: 2560, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
            mountain: file(relativePath: {eq: "mountain.png"}) {
                publicURL
              }
        }
    `)
    
    const [moonOpacity, setMoonOpacity] = React.useState(1)

    React.useEffect(() => {
      function handleScroll() {
        // console.log(window.innerHeight)
        const yPos = window.scrollY;
        const moonPos = yPos + (window.innerHeight * 50)/100
        // console.log(moonPos)
        
        if(moonPos >=  window.innerHeight){
          setMoonOpacity(0)
        }else{
          setMoonOpacity(1)
        }
      }

      window.addEventListener('scroll', handleScroll, false)

      return () => {
        window.removeEventListener('scroll', handleScroll, false)
      }
    }, [])

  return (
  <Layout>
    <Head title="Jean Tiston | Software Engineer" />
    <motion.div className={indexStyles.moon} animate={{ opacity: moonOpacity }} transition={{ opacity: {duration: 0.1} }}>
      <Img className={indexStyles.moonBig} fixed={data.moon.childImageSharp.fixed} alt="moon"  />
      <Img  className={indexStyles.moonSmall} fixed={data.moon2.childImageSharp.fixed} alt="moon"  />
    </motion.div>
    {/* <div>
    <Img id="mountain" src={data.mountain2.childImageSharp.fixed} alt="mountain" className={indexStyles.mountain} /> 
    </div> */}
    <img id="mountain" src={data.mountain.publicURL} alt="mountain" className={indexStyles.mountain} /> 
    <Hero />
    <div className={indexStyles.spacer} ></div>
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
  )
}
