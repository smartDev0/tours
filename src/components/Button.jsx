import classnames from 'classnames';
import React from 'react';
import capitalize from '../util/capitalize';
import Link from './Link';
import PropTypes from '../util/PropTypes';
import warning from '../util/warning';
import * as styles from './Button.module.scss';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['cta', 'pill', 'ctaAccent', 'pillAccent', 'link', 'linkDark', 'transparent', 'ios', 'header', 'how', 'intro', 'outline']),
    submit: PropTypes.bool,
    fullWidth: PropTypes.bool,
    rounded: PropTypes.bool,
    onClick: PropTypes.func,
    to: PropTypes.string,
};

const defaultProps = {
    children: null,
    className: null,
    variant: 'pillAccent',
    submit: false,
    fullWidth: false,
    rounded: false,
    onClick: null,
    to: null,
};

const Button = ({
    children,
    className,
    onClick,
    submit,
    fullWidth,
    rounded,
    variant,
    to,
    ...rest
}) => {
    const buttonClassName = classnames(
        styles.button,
        styles[`variant${capitalize(variant)}`],
        className,
        {
            "w-100": fullWidth,
            [styles.rounded]: rounded,
        },
    );

    warning(
        !(submit && onClick),
        'You provide onClick to a submit button. Please remove onClick handler or submit attribute',
    );

    if (submit) {
        return (
            <button type="submit" className={buttonClassName}>
                {children}
            </button>
        );
    }

    if (to) {
        return (
            <Link to={to} wrapper {...rest}>
                <button type="button" className={buttonClassName}>
                    {children}
                </button>
            </Link>
        );
    }

    return (
        <button type="button" onClick={onClick} className={buttonClassName}>
            {children}
        </button>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
