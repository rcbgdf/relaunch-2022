import React from "react"

import BlogPostCard from "./blog-post-card"

import "./blog-posts.scss"
import { useStaticQuery, graphql } from "gatsby"

const _ = require('lodash')


export default function BlogPosts({ data }) {
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

  teaserPosts.forEach(document => {
    console.log(document.node)
  })
  return (
    <div className="blog-posts-wrapper">
      {teaserPosts.map(document => (
        <BlogPostCard
          key={document.node.id}
          id={document.node.id}
          slug={document.node.Slug}
          keywords={document.node.Keywords}
          titel={document.node.Titel}
          datum={document.node.published_at}
          beitragsbild={document.node.Beitragsbild ? document.node.Beitragsbild.localFile : file }
          inhaltMarkdown={document.node.Teaser}
        />
      ))}
    </div>
  )
}
