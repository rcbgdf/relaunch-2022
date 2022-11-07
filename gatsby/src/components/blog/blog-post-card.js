import React from "react"

import moment from "moment"
import { Link } from "gatsby"
import Reactmarkdown from "react-markdown"
import ReactDOMServer from "react-dom/server"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./blog-post-card.scss"

function md2html(md) {
  const txt = ReactDOMServer.renderToString(
    <Reactmarkdown>{md}</Reactmarkdown>
  ).replace(/<[^>]+>/g, "")
  return txt.length > 100 ? txt.substring(0, 100) + "..." : txt
}

const BlogPostCard = ({
  id,
  titel,
  slug,
  datum,
  beitragsbild,
  inhaltMarkdown,
}) => {
  // console.log(`beitragsbild-${titel}`, beitragsbild)
  return (
    <div className="blog-card">
      <Link to={`/${slug}`}><GatsbyImage alt={`Titelbild: ${titel}`} image={getImage(beitragsbild)} /></Link>
      <div className="blog-card-container">
        <h4>
          <strong>
            <Link to={`/${slug}`}>{titel}</Link>
          </strong>
        </h4>
        <h5>Blogbeitrag vom {moment(datum).format("D.M.YYYY")}</h5>
        <p>{md2html(inhaltMarkdown)}</p>
      </div>
    </div>
  )
}

export default BlogPostCard
