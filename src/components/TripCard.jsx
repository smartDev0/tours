import classnames from "classnames"
import React from "react"
import PropTypes from "../util/PropTypes"
import Link from './Link'
import * as styles from "./TripCard.module.scss"
import Typography from "./Typography"
import {useTranslation} from "react-i18next";

const TripCard = ({ children, url, link, title, day, price }) => {

    const {t} = useTranslation();

    return (
        <>
            <div className={classnames([styles.container])}>
                <div className={classnames([styles.img_container])}>
                    <Link to={link}>
                        <img src={url} alt='' className="img-fluid"/>
                    </Link>
                </div>
                <div className={classnames([styles.card_body])}>
                    <div className={classnames([styles.card_content])}>
                        <Typography variant='heading3' className={classnames([styles.card_title])}>
                            <Link to={link}>
                                {title}
                            </Link>
                        </Typography>
                    </div>
                    <div className={classnames([styles.card_footer])}>
                        <div className={'d-flex align-items-center justify-content-between pt-2 pb-3'}>
                            <div className={classnames([styles.card_day])}>
                                <i className="icon-calendar-empty"></i>
                                <div className={classnames([styles.card_day_text])}>
                                    {day} {t('ui.components.tripCard.days')}
                                </div>
                            </div>
                            <div className={classnames([styles.card_price])}>
                                <div>
                                    {t('ui.components.tripCard.startFrom')}
                                    <span className={classnames([styles.card_price_value])}>
                                {price} €
                            </span>
                                </div>
                            </div>
                        </div>
                        <div className={'d-flex align-items-center justify-content-between'}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    TripCard.propTypes = {
        children: PropTypes.node,
        url: PropTypes.string,
        link: PropTypes.string,
        title: PropTypes.string,
        day: PropTypes.number,
        price: PropTypes.number
    }

    TripCard.defaultProps = {
        children: null,
        url: null,
        link: null,
        title: '',
        day: '',
        price: 0
    }
}

export default TripCard
