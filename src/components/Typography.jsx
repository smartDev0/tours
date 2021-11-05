import classnames from 'classnames';
import * as React from 'react';
import PropTypes from '../util/PropTypes';
import * as styles from './Typography.module.scss';

const propTypes = {
    align: PropTypes.oneOf(['inherit', 'left', 'center', 'right']),
    as: PropTypes.elementType,
    children: PropTypes.node,
    className: PropTypes.string,
    display: PropTypes.oneOf(['initial', 'block', 'inline']),
    noWrap: PropTypes.bool,
    paragraph: PropTypes.bool,
    variant: PropTypes.oneOf([
        'inherit',
        'display1',
        'display2',
        'display3',
        'heading1',
        'heading2',
        'heading3',
        'heading4',
        'heading5',
        'heading6',
        'intro',
        'body',
        'blockquote',
        'cite',
        'small',
        'large',
        'handwritten',
        'headingText',
        'iconText',
        'headingTitle',
        'headingSubTitle',
        'subHeadingTitle',
        'subTitle',
        'iosHeading',
        'formDescription',
        'cardSubTitle',
        'cardHeadingText',
        'cardName',
        'cardTitle',
        'headerIntro',
        'headerText'
    ]),
};

const defaultProps = {
    align: 'inherit',
    as: null,
    children: null,
    className: null,
    display: 'initial',
    noWrap: false,
    paragraph: false,
    variant: 'body',
};

const variantMapping = {
    display1: 'h1',
    display2: 'h1',
    display3: 'h1',
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h3',
    heading4: 'h4',
    heading5: 'h5',
    heading6: 'h6',
    intro: 'p',
    body: 'p',
    blockquote: 'p',
    handwritten: 'p',
    cite: 'cite',
};

const Typography = React.forwardRef((props, ref) => {
    const {
        align,
        as,
        children,
        className,
        display,
        noWrap,
        paragraph,
        variant,
    } = props;

    const Component = as || variantMapping[variant] || (paragraph ? 'p' : 'span');

    return (
        <Component
            className={classnames(
                styles.root,
                {
                    [styles[variant]]: variant !== 'inherit',
                    [styles.noWrap]: noWrap,
                    [styles.paragraph]: paragraph,
                    [`text-${align}`]: align !== 'inherit',
                    [`d-${display}`]: display !== 'initial',
                },
                className,
            )}
            ref={ref}
        >
            {children}
        </Component>
    );
});

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;
