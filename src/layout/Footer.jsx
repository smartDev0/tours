import classnames from "classnames"
import React, { useState } from "react"
import { Col, Container, Row } from 'react-bootstrap';
import { ToastProvider } from 'react-toast-notifications';
import Typography from "../components/Typography";
import Link from './../components/Link'
import * as styles from "./Footer.module.scss"
import Newsletter from '../components/NewsletterForm'
import { useTranslation } from "react-i18next"
const Footer = () => {
    const { t, i18n } = useTranslation()

    const [values, setValues] = useState({
        language: 'it'
    });

    function handleChange(event) {
        i18n.changeLanguage(event.target.value)

        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }
    return (
        <footer className={classnames([styles.container])}>
            <Container>
                <Row>
                    <Col md={3}>
                        <Typography variant='heading3' className={classnames([styles.title])}>
                            <span style={{ color: '#ff4424' }}>We</span>Shoot
                        </Typography>
                        <ul>
                            <li>
                                <Link to="/viaggi-fotografici/">
                                    ✈️ Viaggi Fotografici
                                </Link>
                            </li>
                            <li>
                                <Link to="/viaggi-fotografici/calendario/">
                                    📅 Calendario Viaggi Fotografici
                                </Link>
                            </li>
                            <li>
                                <Link to="/accademia/">
                                    📚 Accademia di Fotografia
                                </Link>
                            </li>
                            <li>
                                <Link to="/accademia/corsi/">
                                    🎥 Corsi di Fotografia
                                </Link>
                            </li>
                            <li>
                                <Link to="/accademia/sistema-weshoot/">
                                    👨‍🎓 Diventa un master
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.iubenda.com/privacy-policy/43774671">
                                    🔐 Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/gdpr">
                                    🇪🇺  GDPR
                                </Link>
                            </li>
                            <li>
                                <Link to="/termini">
                                    📜 Termini e condizioni
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.iubenda.com/privacy-policy/43774671/cookie-policy">
                                    🍪 Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <Typography variant='heading3' className={classnames([styles.title])}>
                            Corsi di Fotografia
                        </Typography>
                        <ul>
                            <li>
                                <Link to="https://www.weshoot.it/accademia/corsi/corso-base-di-fotografia/">
                                    Corso Fotografia di Base
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.weshoot.it/accademia/corsi/la-fotografia-notturna/">
                                    Fotografia Notturna
                                </Link>
                            </li>

                            <li>
                                <Link to="https://www.weshoot.it/accademia/corsi/lightroom-efficace/">
                                    Lightroom Efficace
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.weshoot.it/accademia/corsi/fotografia-landscape-fine-art/">
                                    Landscape Fine Art
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.weshoot.it/accademia/corsi/luna-cinerea/">
                                    Fotografare la Luna
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.weshoot.it/accademia/corsi/sviluppo-della-via-lattea-land-cielo/">
                                    Sviluppo Via Lattea
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.weshoot.it/accademia/corsi/lunghe-esposizioni/">
                                    Lunghe Esposizioni
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.weshoot.it/accademia/corsi/workflow-per-editare-un-timelapse/">
                                    Time Lapse
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.weshoot.it/accademia/corsi/pianificare-la-fotografia-di-paesaggio/">
                                    Pianificare una Foto
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.weshoot.it/accademia/corsi/come-si-realizzano-vlog-videomaking/">
                                    vlog e Videomaking
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.weshoot.it/accademia/corsi/fotografare-la-luna/">
                                    Fotografare la Luna
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <Typography variant='heading3' className={classnames([styles.title])}>
                            Blog
                        </Typography>
                        <ul>
                            <li>
                                <Link to="/blog">
                                    Blog di Fotografia
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/category/tutorial/">
                                    Tutorials
                                </Link>
                            </li>
                            <li>
                                <Link to="blog/category/rumors/">
                                    Rumors
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/category/recensioni/">
                                    Recensioni
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/category/scuola-di-fotografia/">
                                    Scuola di fotografia
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/fotografi-e-partners-ufficiali/">
                                    Partners
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <Typography variant='heading3' className={classnames([styles.title])}>
                            UNISCITI A 18.000 WeShooters
                        </Typography>
                        <Typography variant="heading6">
                            Ricevi solo le notizie per migliorare la tua fotografia di paesaggio.
                        </Typography>
                        <ToastProvider placement="bottom-center">
                            <Newsletter />
                        </ToastProvider>
                        <Typography variant='heading3' className={classnames([styles.title])}>
                            Lingua
                        </Typography>
                        <div className={classnames([styles.setting])}>
                            <select name="language" id="language" value={values.language}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="it">🇮🇹 Italiano</option>
                                <option value="en">🇺🇸 English</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className={classnames([styles.social_footer])}>
                            <ul>
                                <li>
                                    <Link to="https://www.facebook.com/groups/fotografiaindigitale">
                                        <i className="icon-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/we_shoot_official/">
                                        <i className="icon-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.youtube.com/channel/UCyAcVGdUpxmgM7s2EjrVVkga">
                                        <i className="icon-youtube-play"></i>
                                    </Link>
                                </li>
                            </ul>
                            <p>© WeShoot 2021 - Tutti i diritti riservati </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer
