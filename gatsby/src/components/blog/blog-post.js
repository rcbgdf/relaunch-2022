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

import "./blog-post.scss"

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
  const von = post.Autor ? ` von ${post.Autor}` : '';
  const datum = post.published_at ? `Beitrag vom ${moment(post.published_at).format("D.M.YYYY")}` : '';
  return `${datum}${von}`
}

const lesezeit = (post) => {
  return post.Lesezeit ? `Lesezeit ${post.Lesezeit} min` : '';
}

const autorInfo = (post) => {
  const von = post.Autor ? ` - ${post.Autor}` : '';
  const autorInfo = post.AutorInfo ? <Reactmarkdown remarkPlugins={[gfm]}>{`${post.AutorInfo} ${von}`}</Reactmarkdown> : '';
  return <div className="autor-info">
      {autorInfo}
      </div>
}

const BlogPostPage = ({ data, pageContext }) => {
  const post = data.strapiBlogbeitrag
  const beitragsbildFehlt = data.file
  const { next, previous } = pageContext

  const beitragsbild = post.Beitragsbild ? post.Beitragsbild.localFile.childImageSharp.gatsbyImageData : beitragsbildFehlt.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo title="Blog" />
      {post.Beitragsbild && <Helmet
      meta={[
        {
          property: `og:title`,
          content: post.titel,
        },{
          property: `og:description`,
          content: `Rednerclub Bergedorf ${subtitel(post)}`,
        },{
          property: `og:url`,
          content: `${process.env.GATSBY_PUBLIC_URL}/${post.Slug}/`,
        },{
          property: `fb:app_id`,
          content: `${process.env.GATSBY_FB_APPID}`,
        },{
          property: `og:image`,
          content: post.Beitragsbild.url,
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
                  <h1>{post.Titel}</h1>
                </Col>
              <Row>
              </Row>
                <Col md={12}>
                  <GatsbyImage alt={`Titelbild: ${post.Titel}`} image={getImage(beitragsbild)} />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  {post.Avatar ?
                        <div
                        className="avatar"
                        style={{ backgroundImage: "url(" + post.Avatar.url + ")" }}
                      />
                : null}
                  <div style={{margin: '1em'}}>
                    {subtitel(post)} <br/>
                    {lesezeit(post)}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  {autorInfo(post)}
                </Col>
              </Row>



              </Container>
      </section>
      <section className="section-b">
          <Container>
              <Row className="pt-2">
                  <Col md={12}>
                  <Reactmarkdown remarkPlugins={[gfm]}>{post.Inhalt}</Reactmarkdown>
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

export default BlogPostPage

export const query = graphql`
  query BlogQuery($id: String!) {
    strapiBlogbeitrag(id: { eq: $id }) {
      Titel
      Beitragsbild {
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
      Avatar {
        url
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 100,
              blurredOptions: {width: 50},
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
      Slug
      Datum
      Inhalt
      Autor
      AutorInfo
      Teaser
      Lesezeit
      published_at
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
