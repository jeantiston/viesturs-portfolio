import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import heroStyles from './hero.module.css'

const Hero = () => {
    const data = useStaticQuery(graphql`
        query Images {
            moon: file(relativePath: {eq: "moon.png"}) {
                id
                childImageSharp {
                  fluid(maxWidth: 150, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
            }
            mountain: file(relativePath: {eq: "mountain.png"}) {
                id
                childImageSharp {
                  fluid(quality: 100){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
    `)

    console.log(data)

    return (
        <div className={heroStyles.heroBg}>
            <div className={heroStyles.hero}>
                <div className={heroStyles.moonWrapper}>
                    <Img className={heroStyles.moon} fluid={data.moon.childImageSharp.fluid} alt="moon"/>
                </div>
                <div className={heroStyles.headline}>
                    <p>Hello, my name is</p>
                    <h1>Jean Tiston</h1>
                </div>
                <div className={heroStyles.block}>
                    <p>I’m a software engineer that focuses on creating beautiful and functional websites that clearly conveys your brand</p>
                </div>
                <div className={heroStyles.block}>
                    <button>Get In Touch</button>
                    
                </div>
                {/* <div className={heroStyles.block}>
                    <Img fluid={data.mountain.childImageSharp.fluid} alt="mountain"/>
                </div> */}
            </div>
            <div className={heroStyles.mountain}>
                
                {/* <p>Hello hello hello hello</p> */}
                    <Img fluid={data.mountain.childImageSharp.fluid} alt="mountain"/>
            </div>
           
            
        </div>
    )

    
}

export default Hero