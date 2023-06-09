import React from 'react'
import Skillname from '../components/Skillname'
import { GitHubSVG, Base, Styles, Sassy, Bootstrap, JavaScriptSVG, ReactjsSVG, GitSVG, FigmaSVG, VSCodeSVG  } from '../components/SVGs'

function Skills() {
  return (
    <section id='Skills' className='Skills'>
      <h2>Skills</h2>
      <p>Technologies for Building Web Pages</p>
      <div className="skill-info">
        <Skillname mySvg={<Base />} skillTitle={"HTML5"} />
        <Skillname mySvg={<Styles />} skillTitle={"CSS3"} />
        <Skillname mySvg={<JavaScriptSVG />} skillTitle={"JavaScript"} />
      </div>
      <p>Frameworks & Libraries</p>
        <div className="skill-info">
          <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
            <Skillname mySvg={<Bootstrap />} skillTitle={"Bootstrap"} />
          </a>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            <Skillname mySvg={<ReactjsSVG />} skillTitle={"React"} />
          </a>
        </div>
      <p>Software & Tools</p>
        <div className="skill-info">
          <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
            <Skillname mySvg={<Sassy />} skillTitle={"SASS"} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Skillname mySvg={<GitHubSVG />} skillTitle={"GitHub"} />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
            <Skillname mySvg={<GitSVG />} skillTitle={"Git"} />
          </a>
          <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
            <Skillname mySvg={<FigmaSVG />} skillTitle={"Figma"} />
          </a>
          <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
            <Skillname mySvg={<VSCodeSVG />} skillTitle={"Visual Studio Code"} />
          </a>
        </div>
        <hr />
    </section>
  )
}

export default Skills