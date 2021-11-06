import * as React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import SEO from "../components/seo"
import BackgroundVideo from '../components/BackgroundVideo';
import Typography from '../components/Typography';
import Button from '../components/Button'
import CategoryCard from "../components/CategoryCard";
import TripCard from "../components/TripCard";
// import GalleryCard from '../components/GalleryCard';
import CourseCard from "../components/CourseCard";

import backgroundVideo from './../../static/aurora-boreale-viaggio-fotografico-norvegia.mp4'

import '../scss/bootstrap.scss';
import '../scss/main.scss';
import '../scss/vender.css'

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
      <div style={{ backgroundColor: 'white' }}>
        <Container fluid="xl" className="margin_60">
          <div className="main-title">
            <Typography variant='heading3'>
              Paris <span style={{ color: '#e14d67' }}>Top</span> Tours
            </Typography>
            <Typography>
              Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.
            </Typography>
          </div>
          <Row>
            <Col lg={4} md={6} className="zoomIn">
              <TripCard
                link='/'
                title='Islanda Express'
                day='5'
                price={749}
                url={'https://strapi-imaginary.weroad.it/resource/small/552/islanda-a-360-gradi.jpg'}
              >
                <Button variant={'linkOutline'}>Vedi date</Button>
                <Button variant={'link'} to='/'>Vedi viaggio</Button>
              </TripCard>
            </Col>
            <Col lg={4} md={6} className="zoomIn">
              <TripCard
                link='/'
                title='Islanda Express'
                day='5'
                price={749}
                url={'https://strapi-imaginary.weroad.it/resource/small/552/islanda-a-360-gradi.jpg'}
              >
                <Button variant={'linkOutline'}>Vedi date</Button>
                <Button variant={'link'} to='/'>Vedi viaggio</Button>
              </TripCard>
            </Col>
            <Col lg={4} md={6} className="zoomIn">
              <TripCard
                link='/'
                title='Islanda Express'
                day='5'
                price={749}
                url={'https://strapi-imaginary.weroad.it/resource/small/552/islanda-a-360-gradi.jpg'}
              >
                <Button variant={'linkOutline'}>Vedi date</Button>
                <Button variant={'link'} to='/'>Vedi viaggio</Button>
              </TripCard>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <Container fluid="xl" className="margin_60">
          <div className="main-title">
            <Typography variant='heading3'>
              SOME <span style={{ color: '#e14d67' }}>IMAGES</span> FROM TRAVELLERS
            </Typography>
            <Typography>
              Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.
            </Typography>
          </div>
          <hr></hr>
          <div id='gallery' className="final-tiles-gallery effect-dezoom effect-fade-out caption-top social-icons-right">
            <div className="ftg-items">
            </div>
          </div>
        </Container>
        <div style={{ backgroundColor: 'white' }}>
          <Container fluid="xl" className="margin_60">
            <div className="main-title">
              <Typography variant='heading3'>
                SOME <span style={{ color: '#e14d67' }}>GOOD</span> REASONS
              </Typography>
              <Typography>
                Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.
              </Typography>
            </div>
            <Row>
              <Col lg={4}>
                <CourseCard
                  title="Premium tours"
                  tour={120}
                  url="https://www.weshoot.it/accademia/wp-content/uploads/avatars/5/5e7f73ac2a738-bpthumb.jpg"
                  text="Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset."
                >
                  <Button variant={'linkOutline'}>Read more</Button>
                </CourseCard>
              </Col>
              <Col lg={4}>
                <CourseCard
                  title="Premium tours"
                  tour={120}
                  url="https://www.weshoot.it/accademia/wp-content/uploads/avatars/5/5e7f73ac2a738-bpthumb.jpg"
                  text="Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset."
                >
                  <Button variant={'linkOutline'}>Read more</Button>
                </CourseCard>
              </Col>
              <Col lg={4}>
                <CourseCard
                  title="Premium tours"
                  tour={120}
                  url="https://www.weshoot.it/accademia/wp-content/uploads/avatars/5/5e7f73ac2a738-bpthumb.jpg"
                  text="Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset."
                >
                  <Button variant={'linkOutline'}>Read more</Button>
                </CourseCard>
              </Col>
            </Row>
            <hr />
            <br />
            <Row>
              <Col md={6}>
                <img src="http://www.ansonika.com/citytours/img/laptop.png" alt="laptop" className="img-fluid"></img>
              </Col>
              <Col md={6}>
                <Typography variant="heading4">
                  <span>Get started</span> with CityTours
                </Typography>
                <Typography variant="heading6">
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
                </Typography>
                <br />
                <ul className="list_order">
                  <li><span>1</span>Select your preferred tours</li>
                  <li><span>2</span>Select your preferred tours</li>
                  <li><span>3</span>Select your preferred tours</li>
                </ul>
                <Button variant={'link'} to='/'>Start now</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default IndexPage
