import * as React from "react"
import {Col, Container, Row} from 'react-bootstrap';
import {useTranslation} from "react-i18next"
import {StaticImage} from "gatsby-plugin-image"
import SEO from "../components/seo"
import BackgroundVideo from '../components/BackgroundVideo';
import Typography from '../components/Typography';
import Button from '../components/Button'
import CategoryCard from "../components/CategoryCard";
import TripCard from "../components/TripCard";
import GalleryCard from '../components/GalleryCard';
import CourseCard from "../components/CourseCard";

import backgroundVideo from './../../static/media/aurora-boreale-viaggio-fotografico-norvegia-2.mp4'

const IndexPage = () => {
  const [categories, setCategories] = React.useState(null)
  const [courses, setCourses] = React.useState(null)
  const [workshops, setWorkshops] = React.useState(null)
  const [workshopImages, setWorkshopImages] = React.useState(null)

  const { t } = useTranslation();

  React.useEffect(async () => {
    const categoriesResults = await fetch(
      `${process.env.GATSBY_API_URL}/category`
    ).then(res => res.json())
    const categories = await Promise.all(categoriesResults.map(async (item) => {
      item.img = item.img ? process.env.GATSBY_WESHOOT_AWS_URL + item.img : null;
      return item
    }))
    setCategories(categories)

    const courseResult = await fetch(
      `${process.env.GATSBY_API_URL}/course`
    ).then(res => res.json())
    setCourses(courseResult)

    const workshopResult = await fetch(
      `${process.env.GATSBY_API_URL}/workshop`
    ).then(res => res.json())
    setWorkshops(workshopResult)

    const workshopImageResult = await fetch(`${process.env.GATSBY_API_URL}/workshop_image/getWithType`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "type": "group" })
    }).then(res => res.json());
    const data = await Promise.all(workshopImageResult.map(async (item) => {
      item.src = process.env.GATSBY_WESHOOT_AWS_URL + item.file_id;
      item.thumbnail = process.env.GATSBY_WESHOOT_AWS_URL + item.thumbnail_id;
      const img = new Image();
      img.src = process.env.GATSBY_WESHOOT_AWS_URL + item.file_id;
      await img.decode();
      const { height, width } = calculateRatio(img.height, img.width)
      item.height = height
      item.width = width
      return item
    }))
    setWorkshopImages(data)
  }, [])


  const calculateRatio = (height, width) => {
    for (var num = height; num > 1; num--) {
      if ((width % num) === 0 && (height % num) === 0) {
        width = width / num;
        height = height / num;
      }
    }
    return { height, width };
  }

  const getDays = (end, start) => {
    const diffTime = Math.abs(new Date(end).getTime() - new Date(start).getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }
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
                <Typography className="animated fadeInDown" variant='heading1'>
                  {t('ui.pages.home.title')}
                </Typography>
                <Container fluid="xl" className="pt-8 pb-8">
                  <Button variant={'outline'} className={'mb-1'}>{t('ui.pages.home.discoverCourses')}  </Button>
                  <Button variant={'intro'} className={'mb-1'}>{t('ui.pages.home.discoverTrips')}  </Button>
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
                {categories.map((category, i) => {
                  if (category.img) {
                    return (
                      <Col md={6} sm={12} className="mb-1" key={i}>
                        <CategoryCard link={'/viaggi-fotografici/collezioni/' + category.url_original} url={category.img}>
                          <Typography variant='heading2'>{category.name}</Typography>
                          <Typography variant='heading3'>{category.description}</Typography>
                        </CategoryCard>
                      </Col>
                    )
                  }
                })}
              </Row>
            )
          }
        </Container>
      </div>
      <div style={{ backgroundColor: '#f1f1f1' }}>
        <Container fluid="xl" className="pt-8 pb-8">
          <div className="main-title">
            <Typography variant='heading2'>
              I migliori <strong style={{ color: '#ff4424' }}>Viaggi Fotografici</strong> di sempre
            </Typography>
            <Typography variant='heading3'>
              Scopri con noi le meraviglie intramontabili, scatta nei posti piú belli del mondo.
            </Typography>
          </div>
          {workshops && workshops.length > 0 && (
            <Row>
              {workshops.map(workshop => {
                return (
                  <Col lg={4} md={6} className="zoomIn mb-2" key={workshop.id}>
                    <TripCard
                      link={'/viaggi-fotografici/destinazioni/' + workshop.url_original + '/' + workshop.place_url_original + '/' + workshop.w_name}
                      title={workshop.name}
                      day={getDays(workshop.end, workshop.start)}
                      price={workshop.price}
                      url={process.env.GATSBY_WESHOOT_AWS_URL + workshop.file_id}
                    >
                      <Button variant={'linkOutline'}>{t('ui.components.tripCard.showDates')}</Button>
                      <Button variant={'link'} to={'/viaggi-fotografici/destinazioni/' + workshop.url_original + '/' + workshop.place_url_original + '/' + workshop.w_name}>{t('ui.components.tripCard.showTrip')}</Button>
                    </TripCard>
                  </Col>
                )
              })
              }
            </Row>
          )}
        </Container>
      </div>

      {workshopImages && workshopImages.length > 0 && (
        <GalleryCard
          theme="dark"
          maxRows={3}
          photos={workshopImages}
        />
      )}
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
                    <Button variant={'linkOutline'} to={course.url}>Inizia Corso</Button>
                  </CourseCard>
                </Col>
              ))}
            </Row>
          )}

          <Row className="pt-8 pb-8">
            <Col md={6}>
              <StaticImage src={'./../../static/homepage/Corso_Fotografia_online_weshoot.jpg'} alt="laptop" className="img-fluid" />
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
              <Button variant={'link'} to='/accademia/'>Inizia Gratis</Button>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default IndexPage
