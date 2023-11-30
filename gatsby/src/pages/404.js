import React from "react"

import {Container,Row,Col} from "react-bootstrap"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section id="was-wir-machen" className="section-a">
        <Container>
          <Row>
          <Col md={6}>
            <h1>Ups... diese Seite können wir nicht finden.</h1>
          </Col>
          <Col md={6}>
            <p><StaticImage width={400} src="../static/images/logos/rcb-logo-98x58.png"/></p>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default NotFoundPage
