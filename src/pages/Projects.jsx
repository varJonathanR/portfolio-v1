import React from 'react'
import Projectcard from '../components/Projectcard'
import img0 from '../assets/interior-consultant_preview.png'
import img1 from '../assets/recipe-page_preview.png'
import img2 from '../assets/checkout-preview.png'
import img3 from '../assets/edie-homepage-preview.png'

function Projects() {
  return (
    <section id='Projects' className='Projects'>
      <h2>Some things I've built</h2>
      <a href="#">View the archive</a>
      <div className="project-container">
        <Projectcard imgSrc={img0} alt={"Interior Consultant preview"} projectTitle={"Interior Consultant"} projectDescription={"A simple landing page for an 404 error"} builtwith={"HTML - SCSS"} repositorylink={"https://github.com/varJonathanR/interior-consultant.git"} demolink={"https://interior-consultant-varjonathanr.netlify.app/"} />
        <Projectcard imgSrc={img1} alt={"Recipe Page preview"} projectTitle={"Recipe Page"} projectDescription={"A"} builtwith={"HTML - SCSS - JavaScript"} repositorylink={"https://github.com/varJonathanR/recipe-page.git"} demolink={"https://recipe-page-varjonathanr.netlify.app/"} />
        <Projectcard imgSrc={img2} alt={"Checkout Page preview"} projectTitle={"Checkout Page"} projectDescription={"A"} builtwith={"Reactjs - SCSS"} repositorylink={"https://github.com/varJonathanR/checkout-page.git"} demolink={"https://checkout-page-varjonathanr.netlify.app/"} />
        <Projectcard imgSrc={img3} alt={"Edie Homepage preview"} projectTitle={"Edie Homepage"} projectDescription={"A"} builtwith={"Reactjs - SCSS"} repositorylink={"https://github.com/varJonathanR/edie-homepage.git"} demolink={"https://edie-homepage-varjonathanr.netlify.app/"} />
      </div>
      <hr />
    </section>
  )
}

export default Projects