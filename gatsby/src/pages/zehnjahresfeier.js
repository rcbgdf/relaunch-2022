import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"

import { Container, Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"
import Reactmarkdown from "react-markdown"
import gfm from 'remark-gfm'

import { FacebookShareButton, FacebookIcon } from "react-share"
import { WhatsappShareButton, WhatsappIcon } from "react-share"
import { TelegramShareButton, TelegramIcon } from "react-share"

import "./index.scss"


const ZehnjahresfeierPage = ({ data }) => {
  const { strapiZehnjahresfeier } = data

  const url = `${process.env.GATSBY_PUBLIC_URL}/zehnjahresfeier`;

  const titel = 'Rednerclub Bergedorfs 10-Jahresfeier';

  return (
    <Layout>
      <Seo title="Rednerclub Bergedorfs Zehnjahresfeier" keywords="rethorik,hamburg,bergedorf,toastmasters,reden"/>

      <section id="10-jahresfeier-social-buttons" className="section-b">
        <Container>
      <Row className="pt-4">
      <Col md={4}>
        <p className="text-left">
        </p>
      </Col>
      <Col md={4}>
        <p className="text-center">
          <FacebookShareButton url={url} hashtag="#toastmasters"  quote={titel}>
            <FacebookIcon size={32} iconFillColor="white" round={true}></FacebookIcon>
          </FacebookShareButton>

          <WhatsappShareButton url={url}  title={titel}>
            <WhatsappIcon size={32} iconFillColor="white" round={true}></WhatsappIcon>
          </WhatsappShareButton>

          <TelegramShareButton url={url} title={titel}>
            <TelegramIcon size={32} iconFillColor="white" round={true}></TelegramIcon>
          </TelegramShareButton>
        </p>
      </Col>
      <Col md={4}>
      </Col>
      </Row>
      </Container>
      </section>

      <section id="10-jahresfeier-teaser" className="section-b">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="section-title">Komm' und feier mit uns unser 10-Jähriges Jubiläum</h2>
              <Reactmarkdown remarkPlugins={[gfm]}>{strapiZehnjahresfeier.Inhalt}</Reactmarkdown>
            </Col>
            </Row>
        </Container>
      </section>

      <section id="10-jahresfeier-teaser-image" className="section-b">
        <Container>
          <Row>
            <Col md={12}>
              <GatsbyImage alt='10-Jahresfeier Teaser' image={getImage(strapiZehnjahresfeier.Beitragsbild.localFile)} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-a">
        <div className="container d-flex justify-content-center">
          <div>
            <a
              href="https://www.toastmasters.org"
              id="tmi-logo"
              style={{
                backgroundImage:
                  "url(images/logos/icon-TMI-LogoWebsite-small.png)",
              }}
            >
              Toastmasters International (tm)
            </a>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <div>
            <a href="https://www.toastmasters.org/Find-a-Club/02933296-rednerclub-bergedorf">
              Toastmasters International Club-Nr. 2933296
            </a>
            {" · Area 3 · Division A · District 95"}
          </div>
        </div>
      </section>
    </Layout>
  )
}

/*
 */

export default ZehnjahresfeierPage

export const query = graphql`
  query ZehnjahresfeierQuery {
    strapiZehnjahresfeier {
      Inhalt
      Beitragsbild {
        url
        localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 770
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  transformOptions: {fit: COVER}
                  aspectRatio: 1.8
                )
              }
            }
      }
    }
  }
`
