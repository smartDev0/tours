import classnames from "classnames"
import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import Typography from "../components/Typography";
import Link from './../components/Link'
import Button from './../components/Button'
import * as styles from "./Footer.module.scss"

const Footer = () => (
    <footer className={classnames([styles.container])}>
        <Container>
            <Row>
                <Col md={3}>
                    <Typography variant='heading3' className={classnames([styles.title])}>
                        WeShoot
                    </Typography>
                    <ul>
                        <li>
                            <Link to="/">
                                Viaggi Fotografici
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Calendario Viaggi Fotografici
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Accademia di Fotografia
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Corsi di Fotografia
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Diventa un master
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                La nostra missione
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col md={3}>
                    <Typography variant='heading3' className={classnames([styles.title])}>
                        Corsi Fotografici
                    </Typography>
                    <ul>
                        <li>
                            <Link to="/">
                                Fotografia Notturna
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Fotografia di Base
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Lightroom Efficace
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Landscape Fine Art
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Fotografare la Luna
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Sviluppo Via Lattea
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Lunghe Esposizioni
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Time Lapse
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Pianificare una Foto
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                vlog e Videomaking
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
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
                            <Link to="/">
                                Blog di Fotografia
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Tutorials
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Rumors
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Recensioni
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Scuola di fotografia
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Partners
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col md={3}>
                    <Typography variant='heading3' className={classnames([styles.title])}>
                        Newsletter
                    </Typography>
                    <Typography variant="heading6">
                        Join our newsletter to keep be informed about offers and news.
                    </Typography>
                    <form>
                        <div className="form-group">
                            <input name="email_newsletter" type="email" placeholder="Your mail" className="form-control"></input>

                        </div>
                        <Button variant={'link'} type="button">Subscribe</Button>
                    </form>
                    <Typography variant='heading3' className={classnames([styles.title])}>
                        SETTINGS
                    </Typography>
                    <div className={classnames([styles.setting])}>
                        <select name="lang" id="lang">
                            <option value="English" selected="">English</option>
                            <option value="Italy">Italy</option>
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
                        <p>© Citytours 2021</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)


export default Footer
