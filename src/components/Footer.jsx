import React from 'react'
/* import Skillname from '../components/Skillname'
import { ReactjsSVG, Sassy } from '../components/SVGs' */

function Footer() {
  return (
    <section className="footer">
        {/* <h5>This page was built with:</h5>
        <div className="made-with">
          <Skillname mySvg={<ReactjsSVG />} skillTitle={"React"} />
          <Skillname mySvg={<Sassy />} skillTitle={"SCSS"} />
        </div> */}
        <p><a href="https://github.com/varJonathanR" target='_blank' rel='noreferrer'>Designed & Built by varJonathanR</a></p>
    </section>
  )
}

export default Footer