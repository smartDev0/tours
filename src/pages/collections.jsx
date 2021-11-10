import * as React from "react"
import {Col, Container, Row} from 'react-bootstrap';
import {useTranslation} from "react-i18next"
import SEO from "../components/seo"
import BackgroundVideo from '../components/BackgroundVideo';
import Typography from '../components/Typography';
import Button from '../components/Button'
import TripCard from "../components/TripCard";
import GalleryCard from '../components/GalleryCard';

import backgroundVideo from './../../static/media/aurora-boreale-viaggio-fotografico-norvegia-2.mp4'

const CollectionsPage = () => {
  const [categories, setCategories] = React.useState(null)
  const [workshops, setWorkshops] = React.useState(null)
  const [workshopImages, setWorkshopImages] = React.useState(null)

  const { t } = useTranslation();

  React.useEffect(async () => {
    const result = await fetch(
      `${process.env.GATSBY_API_URL}/category`
    ).then(res => res.json())
    setCategories(result)

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
      const { height, width } = await calculateRatio(img.height, img.width)
      item.height = height
      item.width = width
      return item
    }))
    setWorkshopImages(data)
  }, [])


  const calculateRatio = (height, width) => {
    for (var num = height; num > 1; num--) {
      if ((width % num) == 0 && (height % num) == 0) {
        width = width / num;
        height = height / num;
      }
    }
    return { height, width };
  }

  const getDays = (end, start) => {
    const diffTime = Math.abs(new Date(end).getTime() - new Date(start).getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
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
                  Tutte le collezioni di viaggi fotografici
                </Typography>
                <Typography className="animated fadeInDown" variant='heading4'>
                  WeShoot / Viaggi Fotografici / Collezioni
                </Typography>
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundVideo>
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
                      <Button variant={'linkOutline'}>Vedi date</Button>
                      <Button variant={'link'} to={'/viaggi-fotografici/destinazioni/' + workshop.url_original + '/' + workshop.place_url_original + '/' + workshop.w_name}>Vedi viaggio</Button>
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

    </>
  )
}

export default CollectionsPage
