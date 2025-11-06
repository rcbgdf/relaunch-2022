import React from "react"

import Layout from "../layout/layout"
import Seo from "../seo/seo"
import { Helmet } from "react-helmet"
import Reactmarkdown from "react-markdown"
import gfm from 'remark-gfm'
import moment from "moment"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { FacebookShareButton, FacebookIcon } from "react-share"
import { WhatsappShareButton, WhatsappIcon } from "react-share"
import { TelegramShareButton, TelegramIcon } from "react-share"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./clubabend-post.scss"

const nav = ({post, next, previous}) => {
  const url = `${process.env.GATSBY_PUBLIC_URL}/${post.id}`;

  return <Container>
  <Row className="pt-4">
      <Col md={4}>
        <p className="text-left">
          {next && (
            <Link to={`/${next.id}`}>{next.titel+" <- vorheriger Beitrag"}</Link>
          )}
        </p>
      </Col>
      <Col md={4}>
        <p className="text-center">
          <FacebookShareButton url={url} hashtag="#toastmasters"  quote={post.titel}>
            <FacebookIcon size={32} iconFillColor="white" round={true}></FacebookIcon>
          </FacebookShareButton>

          <WhatsappShareButton url={url}  title={post.titel}>
            <WhatsappIcon size={32} iconFillColor="white" round={true}></WhatsappIcon>
          </WhatsappShareButton>

          <TelegramShareButton url={url} title={post.titel}>
            <TelegramIcon size={32} iconFillColor="white" round={true}></TelegramIcon>
          </TelegramShareButton>
        </p>
      </Col>
      <Col md={4}>
        <p className="text-right">
          {previous && (
            <Link to={`/${previous.id}`}>
              {"nächster Beitrag -> " + previous.titel}
            </Link>
          )}
        </p>
      </Col>
      </Row>
</Container>
}

const subtitel = (post) => {
  return ''; //post.datum ? `Clubabend am ${moment(post.datum).format("D.M.YYYY")}` : '';
}
const ClubabendPostPage = ({ data, pageContext }) => {
  const post = data.strapiClubabends
  const beitragsbildFehlt = data.file
  const { next, previous } = pageContext
  // console.log('post.beitragsbild', post.beitragsbild)
  // console.log('beitragsbildFehlt', beitragsbildFehlt)
  const beitragsbild = post.beitragsbild ? post.beitragsbild.localFile.childImageSharp.gatsbyImageData : beitragsbildFehlt.childImageSharp.gatsbyImageData
  //console.log(getImage(beitragsbild))
  return (
    <Layout>
      <Seo title="Clubabend" />
      {post.beitragsbild && <Helmet
      meta={[
        {
          property: `og:title`,
          content: post.titel,
        },{
          property: `og:description`,
          content: `Rednerclub Bergedorf ${subtitel(post)}`,
        },{
          property: `og:url`,
          content: `${process.env.GATSBY_PUBLIC_URL}/${post.id}/`,
        },{
          property: `fb:app_id`,
          content: `${process.env.GATSBY_FB_APPID}`,
        },{
          property: `og:image`,
          content: post.beitragsbild.url,
        },{
          property: `og:image:alt`,
          content: `Rednerclub Bergedorf ${subtitel(post)}`,
        }]}
      />}

      <section id="nav-oben" className="section-a">
        {nav({post, next, previous})}
      </section>
      <section className="beitragsbild section-b">
          <Container>
              <Row>
                  <Col md={12}>
                    <h1>{post.titel}</h1>
                    <h5>{subtitel(post)}</h5>
                  </Col>
                <Row>
                </Row>
                  <Col md={12}>
                  <GatsbyImage alt={`Titelbild: ${post.titel}`} image={getImage(beitragsbild)} />
                  </Col>
              </Row>
              </Container>
      </section>
      <section className="section-a">
          <Container>
              <Row className="pt-2">
                  <Col md={12}>
                  <Reactmarkdown remarkPlugins={[gfm]}>{post.inhalt}</Reactmarkdown>
                  </Col>
              </Row>
              </Container>
      </section>
      <section id="nav-unten" className="section-b">
        {nav({post, next, previous})}
      </section>

    </Layout>
  )
}

/*
 */

export default ClubabendPostPage

export const query = graphql`
  query ClubabendQuery($id: String!) {
    strapiClubabends(id: { eq: $id }) {
      titel
      beitragsbild {
        url
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 500,
              blurredOptions: {width: 100},
              placeholder: BLURRED,
              aspectRatio: 1.8,
              layout: FULL_WIDTH,
              transformOptions: {fit: CONTAIN, trim: 1.5},
              formats: PNG,
              backgroundColor: "#ffffff")
          }
        }
      }
      id
      datum
      inhalt
      updatedAt
    }
    file(name: {eq: "beitragsbild-fehlt"}) {
      childImageSharp {
        gatsbyImageData(
          width: 500,
          blurredOptions: {width: 100},
          placeholder: BLURRED,
          aspectRatio: 1.8,
          layout: FULL_WIDTH,
          formats: PNG,
          backgroundColor: "#ffffff")
      }
    }
  }
`
