import React, { useState } from "react"

import { graphql, useStaticQuery } from "gatsby"
import { motion } from 'framer-motion';
import Img from "gatsby-image"

import Layout from '../components/layout'
import Nav from '../components/nav'
import Hero from '../components/hero'
import About from '../components/about'

export default function Home() {
  const data = useStaticQuery(graphql`
        query Images1     {
            moon: file(relativePath: {eq: "moon.png"}) {
                id
                childImageSharp {
                  fixed(width: 100, quality: 100) {
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
        console.log(window.innerHeight)
        const yPos = window.scrollY;
        const moonPos = yPos + (window.innerHeight * 50)/100
        console.log(moonPos)
        
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
    <Nav />
      <motion.div animate={{ opacity: moonOpacity }} transition={{ opacity: {duration: 0.1} }}>
        <Img fixed={data.moon.childImageSharp.fixed} alt="moon" style={{
          position: "fixed",
          left: "10vw",
          top: "22vh",
          zIndex: -2
        }}/>
      </motion.div>

    <img id="mountain" src={data.mountain.publicURL} alt="test" style={{
      position: "absolute",
      width: "100vw",
      top: "70vh"
    }} /> 
    <Hero />
    <About />
  </Layout>
  )
}
