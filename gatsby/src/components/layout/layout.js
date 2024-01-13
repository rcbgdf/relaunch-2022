/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import Footer from "../footer/footer"
import CookieConsent from "react-cookie-consent"
import DiagonalBadge from "../diagonal-badge/diagonal-badge"

import "./layout.scss"

// #155c13

const Layout = ({ children }) => {
  return (
    <div id="wrap">
      <DiagonalBadge ribbonText="10-Jahresfeier</br>am 17.2.2024" />
      <div id="header">
        <div className="container">
          <Header/>
        </div>
      </div>

      <div className="container-fluid">{children}</div>

      <div id="footer" className="rcb-bg-light">
        <div className="container-fluid">
          <Footer/>
        </div>
      </div>

      <CookieConsent
        location="bottom"
        buttonText="Einverstanden"
        style={{ background: "rgb(0, 65, 101)" }}
        buttonStyle={{ backgroundColor: "#29a3c2", color: "white", fontSize: "13px" }}
        expires={150}
      >
        Unsere Website verwendet Cookies.
      </CookieConsent>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
