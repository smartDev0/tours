import * as React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import {Col, Container, Row} from 'react-bootstrap';
import Link from '../components/Link';
import useScrollPos from './../hooks/useScrollPos';
import * as styles from './Header.module.scss'
import Logo from '../../static/logo/WeShoot-logo-extended-black.svg'

const Header = ({ siteTitle }) => {
    const [isScrolled, setScrolled] = React.useState(false);
    const [isActive, setActive] = React.useState(false)
    const [isSubMenu, setSubMenu] = React.useState(false)

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
                            <h1><Link to='/' title="City tours travel template">City Tours travel template</Link></h1>
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
                                        <img src={Logo} width="160" height="34" alt="City tours"></img>
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
                                        Photo Tour <i className="icon-down-open-mini"></i>
                                    </a>
                                    <ul className={classnames({
                                        [styles.show_normal]: isSubMenu,
                                    })}>
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
                                <li>
                                    <Link to='/' className={styles.show_sub_menu}>
                                        Photo Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className={styles.show_sub_menu}>
                                        Photo Academy
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className={styles.show_sub_menu}>
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
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
