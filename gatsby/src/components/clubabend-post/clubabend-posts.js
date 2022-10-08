import React from "react"

import ClubabendPostCard from "./clubabend-post-card"

import "./clubabend-posts.scss"
import { useStaticQuery, graphql } from "gatsby"

const _ = require('lodash')


export default function ClubabendPosts({ data }) {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(name: {eq: "beitragsbild-fehlt"}) {
          childImageSharp {
            gatsbyImageData(
              width: 500,
              blurredOptions: {width: 10},
              placeholder: BLURRED,
              aspectRatio: 1,
              layout: FULL_WIDTH,
              formats: PNG,
              backgroundColor: "#ffffff")
          }
        }
      }
    `
  )

  const teaserPosts = _.slice(data.edges, 0, 8)

  return (
    <div className="clubabend-posts-wrapper">
      {teaserPosts.map(document => (
        <ClubabendPostCard
          key={document.node.id}
          id={document.node.id}
          titel={document.node.titel}
          datum={document.node.datum}
          beitragsbild={document.node.beitragsbild ? document.node.beitragsbild.localFile : file }
          inhaltMarkdown={document.node.inhalt}
        />
      ))}
    </div>
  )
}
