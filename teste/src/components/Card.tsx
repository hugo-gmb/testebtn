import React from 'react'
import './Card.css'
import Pill from './Pill'
import Btn from './Btn'

type CardProps = {
  image?: string
  title?: string
}

export default function Card({
  image = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=60&auto=format&fit=crop&ixlib=rb-4.0.3&s=0',
  title = 'Sailboat'
}: CardProps) {
  return (
    <article className="card">
      <img className="card__image" src={image} alt={`${title} image`} />
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <div className="card__pills">
          <Pill label="Length: 12m" />
          <Pill label="Capacity: 8" />
          <Pill label="Year: 2021" />
        </div>
        <div className="card__actions">
          <Btn size="S">See more</Btn>
        </div>
      </div>
    </article>
  )
}
