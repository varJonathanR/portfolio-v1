import React from 'react'
import ContactLinks from '../components/ContactLinks'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <section id='Contact' className='Contact'>
      <h4>What's next?</h4>
      <h2>Get In Touch</h2>
      <p>If you wish to get in touch with me, please fill out the contact form below. I would love to hear from you! I am available for interesting collaborations, exciting projects and challenging job opportunities. You can also follow me on social media to stay in touch. I look forward to speaking with you soon!</p>
      <ContactForm />
      <p className='social'>My social media</p>
      <ContactLinks />
    </section>
  )
}

export default Contact