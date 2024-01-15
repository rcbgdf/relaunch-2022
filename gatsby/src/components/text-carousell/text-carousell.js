import React from "react"

import { Carousel } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"

import "./text-caroussell.scss"

export default function TextCaroussell({ items }) {
  return (
    <div className="carousel-wrapper">
      <Carousel pause={true}>
        {items.map(item => (
          <Carousel.Item key={item.title}>
            <GatsbyImage className="d-block w-100" alt="TMI" image={item.image}/>
            <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
