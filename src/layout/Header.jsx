import * as React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from 'react-bootstrap';
import Link from '../components/Link';
import * as styles from './Header.module.scss'
const Header = ({ siteTitle }) => (
    <header>
        <div className={styles.top_line}>
            <Container fluid="xl">
                <Row className="align-items-center">
                    <Col lg={6}>
                        <i className="icon-phone"></i><strong>0045 043204434</strong>
                    </Col>
                    <Col lg={6}>
                        <ul className={styles.top_links}>
                            <li><a href="/" className={styles.access_links}>Sign in</a></li>
                            {/* <li><a href="/" className={styles.wishlist_link}>Wishlist</a></li> */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container fluid="xl">
            <Row>
                <Col lg={3}>
                    <div className={styles.logo_home}>
                        <h1><Link to='/' title="City tours travel template">City Tours travel template</Link></h1>
                    </div>
                </Col>
                <nav className="col-9">

                    <div className={styles.main_menu}>
                        <ul>
                            <li className={styles.submenu}>
                                <a className={styles.show_submenu}>
                                    Photo Tour <i className="icon-down-open-mini"></i>
                                </a>
                                <ul>
                                    <li>
                                        <Link to='/'>
                                            All tours
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            Tour Collections
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            Tour Calendar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/'>
                                            Destinations
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.submenu}>
                                <Link to='/' className={styles.show_submenu}>
                                    Photo Courses
                                </Link>
                            </li>
                            <li className={styles.submenu}>
                                <Link to='/' className={styles.show_submenu}>
                                    Photo Academy
                                </Link>
                            </li>
                            <li className={styles.submenu}>
                                <Link to='/' className={styles.show_submenu}>
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className={styles.top_tools}>
                        <li>
                            <a className="search-overlay-menu-btn"><i className="icon_search"></i></a>
                        </li>
                        <li>
                            <div className="dropdown dropdown-cart">
                                <a href="#" data-toggle="dropdown" className="cart_bt">
                                    <i className="icon_bag_alt"></i>
                                </a>
                            </div>
                        </li>
                    </ul>

                </nav>
            </Row>
        </Container>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
