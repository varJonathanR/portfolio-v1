import React from 'react'
import ContactLinks from '../components/ContactLinks'

function Home() {
  return (
    <section id='Home' className='Home'>
      <p className='colored'>Hi, my name is</p>
      <h1><span className='nameH'>Jonathan Rodriguez.</span> <br />
      I build things for the web.</h1>
      <p className='lessWidth'>Welcome to my portfolio as a Junior Frontend Developer</p>
      <button className='button'><a href="#Projects">Check out my projects!</a></button>
      <ContactLinks />
      <hr />
    </section>
  )
}

export default Home