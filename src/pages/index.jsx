import * as React from "react"
import {Col, Container, Row} from 'react-bootstrap';
import SEO from "../components/seo"
import BackgroundVideo from '../components/BackgroundVideo';
import Typography from '../components/Typography';
import Button from '../components/Button'
import CategoryCard from "../components/CategoryCard";
import TripCard from "../components/TripCard";
// import GalleryCard from '../components/GalleryCard';
import CourseCard from "../components/CourseCard";

import backgroundVideo from './../../static/media/aurora-boreale-viaggio-fotografico-norvegia.mp4'

import '../scss/bootstrap.scss';
import '../scss/main.scss';
import '../scss/vender.css'

const IndexPage = ({ path }) => {
  return (
    <>
      <SEO
        title="WeShoot | Scatta, Viaggia e Impara"
      />
      <BackgroundVideo url={backgroundVideo} theme="dark">
        <Container fluid="xl">
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="intro_title text-center">
                <Typography className="animated fadeInDown" variant='heading1'>SCATTA CON CHI CONDIVIDE LA TUA STESSA PASSIONE
                </Typography>
                {/*<Typography className="animated fadeInDown" variant='heading2'>Condividiamo la tua stessa passione </Typography>*/}
                <Container fluid="xl" className="margin_60">
                  <Button variant={'outline'}>Scopri i corsi </Button>
                <Button variant={'intro'}>Scopri i Viaggi </Button>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundVideo>
      <div style={{ backgroundColor: 'white' }}>
        <Container fluid="xl" className="margin_60">
          <div className="main-title">
            <Typography variant='heading2'>
            Esplora le collezioni dei <strong style={{ color: '#ff4424' }}>Viaggi Fotografici</strong>
            </Typography>
            <Typography variant='heading3'>
              Realizza i tuoi sogni di portare a casa quelle foto che hai sempre desiderato.
            </Typography>
          </div>
          <Row className="small-gutters">
            <Col md={6} sm={12}>
              <CategoryCard link='/' url={'https://weshootpictures.s3.eu-west-1.amazonaws.com/viaggi/Destinazioni/Lofoten.jpg'}>
                <Typography variant='heading2'>Aurora Boreale</Typography>
                <Typography>1150 Locations</Typography>
              </CategoryCard>
            </Col>
            <Col md={6} sm={12}>
              <Row className="small-gutters mt-md-0 mt-sm-2">
                <Col sm={6}>
                  <CategoryCard link='/' url={'https://weshootpictures.s3-eu-west-1.amazonaws.com/2/Workshop_photography_events_e2e8e30060d6858ffcd16bd74b9aec7b.jpg'}>
                    <Typography variant='heading2'>Montagna</Typography>
                    <Typography>1150 Locations</Typography>
                  </CategoryCard>
                </Col>
                <Col sm={6}>
                  <CategoryCard link='/' url={'https://weshootpictures.s3-eu-west-1.amazonaws.com/2/Workshop_photography_events_7f636795cf13fc2c2aaade302c66a530.jpg'}>
                    <Typography variant='heading2'>Deserti</Typography>
                    <Typography>1150 Locations</Typography>
                  </CategoryCard>
                </Col>
                <Col sm={12} className="mt-sm-2">
                  <CategoryCard link='/' url={'https://weshootpictures.s3.eu-west-1.amazonaws.com/viaggi/Destinazioni/lapalma.jpg'}>
                    <Typography variant='heading2'>Via Lattea</Typography>
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
              I migliori <strong style={{ color: '#ff4424' }}>Viaggi Fotografici</strong> di sempre
            </Typography>
            <Typography>
              Scopri con noi le meraviglie intramontabili, scatta nei posti piú belli del mondo.
            </Typography>
          </div>
          <Row>
            <Col lg={4} md={6} className="zoomIn">
              <TripCard
                link='/'
                title='Tunisia: Esperienza unica nel deserto del Sahara'
                day='5'
                price={1699}
                url={'https://weshootpictures.s3-eu-west-1.amazonaws.com/2/Workshop_photography_events_01747422100f961d69dc3db870ab7c6b.jpg'}
              >
                <Button variant={'linkOutline'}>Vedi date</Button>
                <Button variant={'link'} to='/'>Vedi viaggio</Button>
              </TripCard>
            </Col>
            <Col lg={4} md={6} className="zoomIn">
              <TripCard
                link='/'
                title="Islanda: un itinerario esclusivo per scoprire l'isola e l'aurora boreale"
                day='5'
                price={749}
                url={'https://weshootpictures.s3-eu-west-1.amazonaws.com/2/Workshop_photography_events_dfa87ee3456be3cad795922240f04549.jpg'}
              >
                <Button variant={'linkOutline'}>Vedi date</Button>
                <Button variant={'link'} to='/'>Vedi viaggio</Button>
              </TripCard>
            </Col>
            <Col lg={4} md={6} className="zoomIn">
              <TripCard
                link='/'
                title='Norvegia: Tra gli incredibili fiordi del Nord'
                day='5'
                price={749}
                url={'https://weshootpictures.s3-eu-west-1.amazonaws.com/2/Workshop_photography_events_af3df2b421bc866ef49574603a31ea4c.jpg'}
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
              Il momento giusto é adesso.
            </Typography>
            <Typography>
              Non Aspettare
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
                  url="https://mediaaccademia.s3.eu-west-1.amazonaws.com/accademia/wp-content/uploads/2020/06/31201048/Guida-completa-alla-Fotografia-Notturna-624x471.jpg"
                  text="Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset."
                >
                  <Button variant={'linkOutline'}>Read more</Button>
                </CourseCard>
              </Col>
              <Col lg={4}>
                <CourseCard
                  title="Premium tours"
                  tour={120}
                  url="https://mediaaccademia.s3.eu-west-1.amazonaws.com/accademia/wp-content/uploads/2020/06/31201048/Guida-completa-alla-Fotografia-Notturna-624x471.jpg"
                  text="Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset."
                >
                  <Button variant={'linkOutline'}>Read more</Button>
                </CourseCard>
              </Col>
              <Col lg={4}>
                <CourseCard
                  title="Premium tours"
                  tour={120}
                  url="https://mediaaccademia.s3.eu-west-1.amazonaws.com/accademia/wp-content/uploads/2020/06/31201048/Guida-completa-alla-Fotografia-Notturna-624x471.jpg"
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
