import * as React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import SEO from "../components/seo"
import BackgroundVideo from '../components/BackgroundVideo';
import Typography from '../components/Typography';
import '../scss/bootstrap.scss';
import '../scss/main.scss';
import '../scss/vender.css'

import backgroundVideo from './../../static/aurora-boreale-viaggio-fotografico-norvegia.mp4'

const IndexPage = ({ path }) => {
  return (
    <>
      <SEO
        title="Home"
      />
      <BackgroundVideo url={backgroundVideo} theme="dark">
        <Container fluid="xl">
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="intro_title">
                <Typography className="animated fadeInDown" variant='heading2'>Affordable Paris tours</Typography>
                <p className="animated fadeInDown">City Tours / Tour Tickets / Tour Guides</p>
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundVideo>
    </>
  )
}

export default IndexPage
