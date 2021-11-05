import React from 'react';
import classnames from 'classnames';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from '../util/PropTypes';
import * as styles from './Link.module.scss';

const propTypes = {
    activeClassName: PropTypes.string,
    children: PropTypes.node,
    partiallyActive: PropTypes.bool,
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
    wrapper: PropTypes.bool,
    underline: PropTypes.bool,
};

const defaultProps = {
    activeClassName: null,
    children: null,
    className: null,
    partiallyActive: false,
    wrapper: false,
    underline: false,
};

const INTERNAL_LINK_PATTERN = /^\/(?!\/)/;
const FILE_LINK_PATTERN = /\.[0-9a-z]+$/i;
const INTERNAL_ANCHOR_PATTERN = /#/;

const Link = ({
    activeClassName,
    children,
    partiallyActive,
    className,
    to,
    wrapper,
    underline,
    ...rest
}) => {
    if (!INTERNAL_LINK_PATTERN.test(to)) {
        return (
            <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className={classnames([
                    className,
                    styles.link,
                    styles.linkExternal,
                    {
                        [styles.linkWrapper]: wrapper,
                        [styles.linkUnderline]: underline,
                    },
                ])}
                {...rest}
            >
                {children}
            </a>
        );
    }

    if (FILE_LINK_PATTERN.test(to)) {
        return (
            <a
                href={to}
                className={classnames([
                    className,
                    styles.link,
                    {
                        [styles.linkWrapper]: wrapper,
                    },
                ])}
                {...rest}
            >
                {children}
            </a>
        );
    }

    if (INTERNAL_ANCHOR_PATTERN.test(to)) {
        return (
            <AnchorLink
                to={to}
                className={classnames([
                    className,
                    styles.link,
                    {
                        [styles.linkWrapper]: wrapper,
                    },
                ])}
                {...rest}
            >
                {children}
            </AnchorLink>
        )
    }

    return (
        <GatsbyLink
            to={to}
            activeClassName={activeClassName}
            partiallyActive={partiallyActive}
            className={classnames([
                className,
                styles.link,
                {
                    [styles.linkWrapper]: wrapper,
                },
            ])}
            {...rest}
        >
            {children}
        </GatsbyLink>
    );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
