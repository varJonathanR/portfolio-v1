import React from 'react'
import { GitHubSVG, LinkSVG } from './SVGs'
function Projectcard(props) {
  return (
    <div className='card'>
        <div className="img-countainer">
            <img src={props.imgSrc} alt={props.alt} />
        </div>
        <h4>{props.projectTitle}</h4>
        <p>{props.projectDescription}</p>
        <p className="built">{props.builtwith}</p>
        <div className="card-footer">
            <a href={props.repositorylink} target="_blank" rel="noopener noreferrer">
                <GitHubSVG />
            </a>
            <a href={props.demolink} target="_blank" rel="noopener noreferrer">
                <LinkSVG />
            </a>
        </div>
    </div>
  )
}

export default Projectcard