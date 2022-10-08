import React,  { useState }  from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { Container, Row, Col } from "react-bootstrap"

import './markdown-remark-page.scss'

const loginForm = (checker) => {
    return <section>
    <Container className="mt-4 mb-4">
        <Row className="mt-2 mb-2">
            <Col>
                {"Für den Zugang zum geschützten Bereich bitte das Kennwort eingeben:"}
            </Col>
        </Row>
        <Row className="mt-2 mb-2">
            <Col>
                <input type="password" name="passwd" placeholder="Kennwort" onChange={(e) => {checker(e.target.value)}}/>
            </Col>
        </Row>
    </Container>
    </section>
}

const content = (data) => {
    const {markdownRemark: post} = data;

    return <>
            <Seo title={post.frontmatter.title} />
            <section id="markdown-page">
                <Container>
                <Row>
                        <Col>
                            <h1>{post.frontmatter.title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div dangerouslySetInnerHTML={{__html: post.html}}></div>
                        </Col>
                    </Row>
                </Container>
            </section>
    </>
}

const isProtected = (path) => {
    return "/intern" === path;
}
export default function Template({data}) {
    const [authenticated, setAuthenticated] = useState(false);

    const checker = (v) => {
        if("LolaBergedorf" === v) setAuthenticated(true)
    }

    console.log('path', data.markdownRemark.frontmatter.path)
    return (
        <Layout>
            {!isProtected(data.markdownRemark.frontmatter.path) || authenticated ? content(data) : loginForm(checker)}
        </Layout>

    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`
