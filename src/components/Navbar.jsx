import React, { useState } from 'react'
import img1 from '../assets/devchallenges.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='Navbar'>
        <h4>varJonathanR</h4>
        <ul className={`nav-items ${isOpen && "open"}`}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About me</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Contact">Contact</a></li>
          <button>Resume</button>
        </ul>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>
    </section>
  )
}

export default Navbar