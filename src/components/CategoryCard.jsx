import classnames from "classnames"
import React from "react"
import PropTypes from "../util/PropTypes"
import Link from './Link'
import * as styles from "./CategoryCard.module.scss"

const CategoryCard = ({ children, url, link }) => (
    <Link className={classnames([styles.container])} to={link}>
        <img src={url} alt='' className="img-fluid"/>
        <div className={classnames([styles.wrapper])}>
            {children}
        </div>
    </Link>
)

CategoryCard.propTypes = {
    children: PropTypes.node,
    url: PropTypes.string,
    link: PropTypes.string
}

CategoryCard.defaultProps = {
    children: null,
    url: null,
    link: null
}

export default CategoryCard
