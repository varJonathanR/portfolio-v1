import React from 'react'
import { GitHubSVG, LinkedInSVG } from './SVGs'

function ContactLinks() {
  return (
    <div className="contactLinks">
        <a href="https://github.com/varJonathanR" target="_blank" rel="noopener noreferrer">
            <GitHubSVG />
        </a>
        <a href="https://www.linkedin.com/in/jonathan-rodr%C3%ADguez-45a9111b6" target="_blank" rel="noopener noreferrer">
            <LinkedInSVG />
        </a>
    </div>
  )
}

export default ContactLinks