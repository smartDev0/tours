import * as React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import {Col, Container, Row} from 'react-bootstrap';
import Link from '../components/Link';
import useScrollPos from './../hooks/useScrollPos';
import * as styles from './Header.module.scss'
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
const Header = ({ siteTitle }) => {
    const [isScrolled, setScrolled] = React.useState(false);
    const [isActive, setActive] = React.useState(false)
    const [isSubMenu, setSubMenu] = React.useState(false)
    const { t } = useTranslation();

    useScrollPos(offset => {
        setScrolled(offset > 100);
    }, []);

    return (
        <header className={classnames({
            [styles.header]: true,
            [styles.headerScrolled]: isScrolled,
        })}>
            <Container fluid="xl">
                <Row>
                    <Col lg={3} sm={3} xs={3}>
                        <div className={styles.logo_home}>
                            <h1><Link to='/' title="WeShoot | Viaggi Fotografici">WeShoot | Viaggi Fotografici</Link></h1>
                        </div>
                    </Col>
                    <nav className="col-9 col-sm-9 col-xs-9">
                        <a
                            
                            className={classnames({
                                [styles.toggle_switch]: true,
                                [styles.active]: isActive,
                            })}
                            onClick={() => { setActive(!isActive) }}
                        >
                            <span>Menu mobile</span>
                        </a>
                        <div className={classnames({
                            [styles.main_menu]: true,
                            [styles.show]: isActive,
                        })}>
                            {isActive && (
                                <>
                                    <div className={styles.header_menu}>
                                        <StaticImage src={'../../static/logo/WeShoot-logo-extended-black.svg'} width="160" height="34" alt="WeShoot | Viaggi Fotografici"/>
                                    </div>
                                    <a  className={styles.open_close}
                                        onClick={() => { setActive(false) }}
                                    >
                                        <i className="icon_set_1_icon-77"></i>
                                    </a>
                                </>
                            )}
                            <ul>
                                <li>
                                    <a 
                                        className={styles.show_sub_menu}
                                        onClick={() => { setSubMenu(!isSubMenu) }}
                                    >
                                        {t('ui.layout.header.photoTours')} <i className="icon-down-open-mini"></i>
                                    </a>
                                    <ul className={classnames({
                                        [styles.show_normal]: isSubMenu,
                                    })}>
                                        <li>
                                            <Link to='/'>
                                                {t('ui.layout.header.allTours')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                {t('ui.layout.header.toursCollections')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                {t('ui.layout.header.toursCalendar')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                {t('ui.layout.header.toursDestinations')}
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to='/accademia/corsi' className={styles.show_sub_menu}>
                                        {t('ui.layout.header.courses')}
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/accademia' className={styles.show_sub_menu}>
                                        {t('ui.layout.header.academy')}
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/blog' className={styles.show_sub_menu}>
                                        {t('ui.layout.header.blog')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <ul className={styles.top_tools}>
                            {/*<li>*/}
                            {/*    <a className="search-overlay-menu-btn"><i className="icon_search"></i></a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <div className="dropdown dropdown-cart">*/}
                            {/*        <a href="#" data-toggle="dropdown" className="cart_bt">*/}
                            {/*            <i className="icon_bag_alt"></i>*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                        </ul>
                    </nav>
                </Row>
            </Container>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
