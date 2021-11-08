import * as React from "react"
import { Col, Container, Row } from 'react-bootstrap';
import SEO from "../components/seo"
import BackgroundVideo from '../components/BackgroundVideo';
import Typography from '../components/Typography';
import Button from '../components/Button'
import CategoryCard from "../components/CategoryCard";
import TripCard from "../components/TripCard";
import GalleryCard from '../components/GalleryCard';
import CourseCard from "../components/CourseCard";

import backgroundVideo from './../../static/media/aurora-boreale-viaggio-fotografico-norvegia.mp4'
import accademia from './../../static/homepage/Corso_Fotografia_online_weshoot.jpg'

import '../scss/bootstrap.scss';
import '../scss/main.scss';
import '../scss/vender.css'

const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
];
const IndexPage = ({ path }) => {
  const [categories, setCategories] = React.useState(null)
  const [courses, setCourses] = React.useState(null)
  const [workshopImages, setWorkshopImages] = React.useState(null)

  const getMeta = (url) => {
    var img = new Image();
    img.src = url;
    img.onload = function () {
      console.log(this.width)
    }
  }
  React.useEffect(async () => {
    const result = await fetch(
      `${process.env.GATSBY_API_URL}/category`
    ).then(res => res.json())
    setCategories(result)

    const courseResult = await fetch(
      `${process.env.GATSBY_API_URL}/course`
    ).then(res => res.json())
    setCourses(courseResult)

    const workshopImageResult = await fetch(`${process.env.GATSBY_API_URL}/workshop_image/getWithType`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "type": "group" })
    }).then(res => res.json());
    const data = workshopImageResult.map((item) => {
      item.src = item.thumbnail_id;
      console.log(item.thumbnail_id)
      item.width = 4;
      item.height = 3;
      return item
    })
    setWorkshopImages(data)
  }, [])
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
                <Container fluid="xl" className="pt-8 pb-8">
                  <Button variant={'outline'}>Scopri i corsi </Button>
                  <Button variant={'intro'}>Scopri i Viaggi </Button>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundVideo>
      <div style={{ backgroundColor: 'white' }}>
        <Container fluid="xl" className="pt-8 pb-8">
          <div className="main-title">
            <Typography variant='heading2'>
              Esplora le collezioni dei <strong style={{ color: '#ff4424' }}>Viaggi Fotografici</strong>
            </Typography>
            <Typography variant='heading3'>
              Realizza i tuoi sogni di portare a casa quelle foto che hai sempre desiderato.
            </Typography>
          </div>
          {categories && categories.length > 0 &&
            (
              <Row className="small-gutters">
                <Col md={6} sm={12}>
                  <CategoryCard link='/' url={categories[0].img}>
                    <Typography variant='heading2'>{categories[0]?.name}</Typography>
                    <Typography>{categories[0]?.description}</Typography>
                  </CategoryCard>
                </Col>
                <Col md={6} sm={12}>
                  <Row className="small-gutters mt-md-0 mt-sm-2">
                    <Col sm={6}>
                      <CategoryCard link='/' url={categories[1].img}>
                        <Typography variant='heading2'>{categories[1].name}</Typography>
                        <Typography>{categories[1].description}</Typography>
                      </CategoryCard>
                    </Col>
                    <Col sm={6}>
                      <CategoryCard link='/' url={categories[2].img}>
                        <Typography variant='heading2'>{categories[2].name}</Typography>
                        <Typography>{categories[2].description}</Typography>
                      </CategoryCard>
                    </Col>
                    <Col sm={12} className="mt-sm-2">
                      <CategoryCard link='/' url={categories[3].img}>
                        <Typography variant='heading2'>{categories[3].name}</Typography>
                        <Typography>{categories[3].description}</Typography>
                      </CategoryCard>
                    </Col>
                  </Row>
                </Col>
              </Row>
            )
          }
        </Container>
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <Container fluid="xl" className="pt-8 pb-8">
          <div className="main-title">
            <Typography variant='heading2'>
              I migliori <strong style={{ color: '#ff4424' }}>Viaggi Fotografici</strong> di sempre
            </Typography>
            <Typography variant='heading3'>
              Scopri con noi le meraviglie intramontabili, scatta nei posti piú belli del mondo.
            </Typography>
          </div>
          <Row>
            <Col lg={4} md={6} className="zoomIn mb-1">
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
            <Col lg={4} md={6} className="zoomIn mb-1">
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
            <Col lg={4} md={6} className="zoomIn mb-1">
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
      <div>
        <Container fluid="xl" className="pt-8 pb-8">
          <div className="main-title">
            <Typography variant='heading2'>
              Il momento giusto é adesso.
            </Typography>
            <Typography variant='heading3'>
              Non Aspettare
            </Typography>
          </div>
          {workshopImages && workshopImages.length > 0 && (
            <GalleryCard
              photos={workshopImages}
            />
          )}

        </Container>
        <div style={{ backgroundColor: 'white' }}>
          <Container fluid="xl" className="pt-8 pb-8">
            <div className="main-title">
              <Typography variant='heading2'>
                Ecco i <strong style={{ color: '#FC4D33' }}>Corsi di Fotografia</strong> WeShoot
              </Typography>
              <Typography variant='heading3'>
                Impara da vincitori di contest internazionali, sviluppa il tuo stile fotografico.
              </Typography>
            </div>
            {courses && courses.length > 0 && (
              <Row>
                {courses.map((course, i) => (
                  <Col lg={4} key={i} className="mb-1">
                    <CourseCard
                      title={course.title}
                      tour={120}
                      url={course.img}
                      text={course.excerpt}
                    >
                      <Button variant={'linkOutline'} to={course.url}>Read more</Button>
                    </CourseCard>
                  </Col>
                ))}
              </Row>
            )}

            <Row className="pt-8 pb-8">
              <Col md={6}>
                <img src={accademia} alt="laptop" className="img-fluid"></img>
              </Col>
              <Col md={6}>
                <Typography variant="heading3">
                  Accedi all'<strong style={{ color: '#FC4D33' }}>accademia fotografica</strong>
                </Typography>
                <Typography variant="heading4">
                  Migliora le tue foto seguendo i consigli di professionisti
                </Typography>
                <br />
                <ul className="list_order">
                  <li><span>1</span>Segui i <strong>corsi online di fotografia</strong></li>
                  <li><span>2</span>Condividi con la community le tue foto</li>
                  <li><span>3</span>Diventa un master</li>
                </ul>
                <Button variant={'link'} to='/'>Inizia Gratis</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}
export default IndexPage
