import React  from 'react';
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { Container, Row, Col } from "react-bootstrap"
import Reactmarkdown from "react-markdown"
import gfm from 'remark-gfm'
import moment from 'moment'
import Loadable from "@loadable/component";

import './simple-markdown-page.scss'

const LoadableOwm = Loadable(() =>
  import("../components/wetter/owm-panel")
);


const isShowOwm = ({datum, path}) => {
    // testdatum
    //datum = "2021-08-02T17:00:00.000Z"
    if(datum) {
        const d = moment(datum)
        const now = moment()
        if(now>d) return false
        if(now<=d.subtract(7, 'days')) return false
    }
    return "/naechster-termin" === path;
}

const content = (data) => {
    const {beitrag} = data.pageContext;

    return <>
            <Seo title={beitrag.frontmatter.title} />
            <section id="markdown-page">
                <Container>
                    <Row>
                        <Col>
                        {isShowOwm(beitrag.frontmatter) ? <LoadableOwm beginn={beitrag.frontmatter.datum}></LoadableOwm> : <></>}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>{beitrag.frontmatter.title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Reactmarkdown remarkPlugins={[gfm]}>{beitrag.inhalt}</Reactmarkdown>
                        </Col>
                    </Row>
                </Container>
                <div className="container d-flex justify-content-center mt-4">
                    <div>
                        {`Seite zuletzt geändert: ${moment(beitrag.updatedAt).format('D.M.YYYY HH:mm')}`}
                    </div>
                    </div>
            </section>

    </>
}


export default function Template(data) {
    return <Layout>{content(data)}</Layout>
}

