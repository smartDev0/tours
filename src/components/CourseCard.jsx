import classnames from "classnames"
import React from "react"
import PropTypes from "../util/PropTypes"
import * as styles from "./CourseCard.module.scss"
import Typography from "./Typography"

const CourseCard = ({ children, url, title, text, tour }) => (
    <div className={classnames([styles.container])}>
        <div className={classnames([styles.img_container])}>
            <img src={url} alt='' className="img-fluid" />
        </div>
        <Typography variant='heading3'>
            {title}
        </Typography>
        <Typography variant="heading6">
            {text}
        </Typography>
        <br />
        {children}
    </div>

)

CourseCard.propTypes = {
    children: PropTypes.node,
    url: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    tour: PropTypes.number
}

CourseCard.defaultProps = {
    children: null,
    url: null,
    link: null,
    title: '',
    text: '',
    tour: 0
}

export default CourseCard
