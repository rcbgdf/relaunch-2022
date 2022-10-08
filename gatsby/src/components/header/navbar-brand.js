import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Navbar } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import "./navbar-brand.scss"

export default function NavbarBrand() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Navbar.Brand href="/">
      <div className="site-title">{site.siteMetadata.title}</div>
      <StaticImage height={35} transformOptions={{fit: "inside"}} alt="Rednerclub Bergedorf Logo" src="../../../static/images/logos/rcb-logo-98x58.png"/>{" "}
    </Navbar.Brand>
  )
}
