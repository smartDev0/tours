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
import CategoryCard from "../components/CategoryCard";

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
      <div style={{ backgroundColor: 'white' }}>
        <Container fluid="xl" className="margin_60">
          <Row className="small-gutters">
            <Col md={6} sm={12}>
              <CategoryCard link='/' url={'http://www.ansonika.com/citytours/img/img_cat_home_1.jpg'}>
                <Typography variant='heading2'>Special Offers</Typography>
                <Typography>1150 Locations</Typography>
              </CategoryCard>
            </Col>
            <Col md={6} sm={12}>
              <Row className="small-gutters mt-md-0 mt-sm-2">
                <Col sm={6}>
                  <CategoryCard link='/' url={'http://www.ansonika.com/citytours/img/img_cat_home_2.jpg'}>
                    <Typography variant='heading2'>Tours</Typography>
                    <Typography>1150 Locations</Typography>
                  </CategoryCard>
                </Col>
                <Col sm={6}>
                  <CategoryCard link='/' url={'http://www.ansonika.com/citytours/img/img_cat_home_2.jpg'}>
                    <Typography variant='heading2'>Hotels</Typography>
                    <Typography>1150 Locations</Typography>
                  </CategoryCard>
                </Col>
                <Col sm={12} className="mt-sm-2">
                  <CategoryCard link='/' url={'http://www.ansonika.com/citytours/img/img_cat_home_4.jpg'}>
                    <Typography variant='heading2'>Hotels</Typography>
                    <Typography>1150 Locations</Typography>
                  </CategoryCard>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default IndexPage
