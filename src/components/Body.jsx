import React from 'react'
import Navbar from './Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Footer from './Footer'

function Body() {
  return (
    <div className='Body'>
      <div className="header">
        <Navbar />
      </div>
      <main className="main">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default Body