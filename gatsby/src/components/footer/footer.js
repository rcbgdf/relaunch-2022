import React from "react"

import { Row, Col, Nav } from "react-bootstrap"
import moment from "moment"

import "./footer.scss"

// fixed-bottom
export default function Footer() {
  return (
    <Row className="footer">
      <Col xs={6}>&copy; {moment().format("yyyy")} Rednerclub Bergedorf {process.env.RELEASE_VERSION}</Col>
      <Col xs={6}>
        <Nav.Link href="/datenschutz">Datenschutz</Nav.Link>
        {" | "}
        <Nav.Link href="/impressum">Impressum</Nav.Link>
      </Col>
    </Row>
  )
}
