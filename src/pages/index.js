import React from "react"

import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'

export default function Home() {
  return (
  <Layout>
    <img src="moon.png" alt="test" style={{
      position: "fixed",
      left: "10vw",
      top: "20vh",
      maxWidth: 150,
      zIndex: -2
    }} />
    <Hero />
    <About />
  </Layout>
  )
}
