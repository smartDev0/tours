import classnames from "classnames"
import React from "react"
import PropTypes from "../util/PropTypes"
import Link from './Link'
import * as styles from "./GalleryCard.module.scss"
const GalleryCard = ({ children, url, link, title, subtitle, twitter, facebook, google, pinterest }) => (
    <div className={classnames([styles.container])}>
        <Link to={link} className={classnames([styles.tile_inner])}>
            <img src={url} alt='' className={classnames([styles.item])} />
            {/* <span className={classnames([styles.title])}>
                {title}
            </span>
            <span className={classnames([styles.subtitle])}>
                {subtitle}
            </span> */}
        </Link>
        <div className={classnames([styles.ftg_social])}>
            <Link to={twitter}>
                <i className="fa fa-twitter"></i>
            </Link>
            <Link to={facebook}>
                <i className="fa fa-facebook"></i>
            </Link>
            <Link to={google}>
                <i className="fa fa-google"></i>
            </Link>
            <Link to={pinterest}>
                <i className="fa fa-pinterest"></i>
            </Link>
        </div>
    </div>

)

GalleryCard.propTypes = {
    children: PropTypes.node,
    url: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    google: PropTypes.string,
    pinterest: PropTypes.string,
}

GalleryCard.defaultProps = {
    children: null,
    url: null,
    link: null,
    title: '',
    subtitle: '',
    twitter: null,
    facebook: null,
    google: null,
    pinterest: null
}

export default GalleryCard
