import * as React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import SEO from "../components/seo"
import BackgroundVideo from '../components/BackgroundVideo';
import Typography from '../components/Typography';
import Button from '../components/Button'
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
              <div className="intro_title text-center">
                <Typography className="animated fadeInDown" variant='heading3'>Affordable Paris tours</Typography>
                <Typography className="animated fadeInDown" variant='intro'>City Tours / Tour Tickets / Tour Guides</Typography>
                <Button variant={'intro'}>View Tours</Button>
                <Button variant={'outline'}>View Tickets</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundVideo>
    </>
  )
}

export default IndexPage
