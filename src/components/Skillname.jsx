import React from 'react'

function Skillname(props) {
  return (
    <div className='skill-shield'>
        {props.mySvg}
        <h4>{props.skillTitle}</h4>
    </div>
  )
}

export default Skillname