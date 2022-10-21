import React from "react"
import RcbButton from "../button/rcb-button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Container,Row,Col} from "react-bootstrap"
import "./responsive-player.scss"
import { useStaticQuery, graphql } from "gatsby"

export default function ResponsivePlayer() {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: {eq: "TMI-Logo.png"}) { childrenImageSharp {
          img80: gatsbyImageData(
            width: 80
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            )
            img150: gatsbyImageData(
              width: 150
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              )
              img337: gatsbyImageData(
                width: 337
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                )
                    }}
      }
        `)

//  const tmiLogoLocation = 'src/images/TMI-Logo.png';

//console.log(file)
const {img80, img150, img337} = file.childrenImageSharp[0]

const image_klein = getImage({gatsbyImageData: img80})
const image_mittel = getImage({gatsbyImageData: img150})
const image_gross = getImage({gatsbyImageData: img337})

//console.log(process.env.GATSBY_HERO_VIDEO_URL)
  return (
    <div className="player-wrapper">
      <video autoPlay muted playsInline>
        <source src={process.env.GATSBY_HERO_VIDEO_URL} type="video/mp4" />
      </video>
      <div className="backdrop">
        <Container fluid>
          <Row>
            <Col md={6}>
              <div className="d-sm-none"><GatsbyImage alt="TMI" image={image_klein}/></div>
              <div className="d-none d-sm-inline-block d-lg-none"><GatsbyImage alt="TMI" image={image_mittel}/></div>
              <div className="d-none d-lg-inline-block"><GatsbyImage alt="TMI" image={image_gross}/></div>
            </Col>
            <Col md={6}>
              <div className="button-wrapper">
                <RcbButton to="#was-wir-machen">Wer wir sind und was wir machen...</RcbButton>
              </div>
              <div className="button-wrapper">
                <RcbButton to="#kontakt">Komm vorbei...</RcbButton>
              </div>
            </Col>
        </Row>
        </Container>
      </div>
    </div>
  )
}
