import React from 'react'
import './Card.css'

const Card = (props) => {

  return (

    <div className='Card' style={{ background : props.color.backGround}}>
        
        <div className='revenue' >
            <span id='title'>{props.title}</span><br/>
            <span id='data'>{props.revenue}</span>
        </div>
        <div className='icon'>
            <img src={props.icon} alt='icon' id='icon'/>
        </div>
    </div>
  )
}

export default Card