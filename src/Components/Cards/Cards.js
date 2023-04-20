import React from 'react'
import { CardData } from '../../Data/data'
import Card from '../Card/Card'
import './Cards.css'
const Cards = () => {
  return (
    <div className='Cards'>
        {CardData.map((card ,id)=>{
            return(
                <div className='parentContainer' key={id}>
                    <Card
                    title ={card.title}
                    color ={card.color}
                    revenue ={card.revenue}
                    icon = {card.icon}
                  
                    />

                </div>
            )
        })}
    </div>
  )
}

export default Cards