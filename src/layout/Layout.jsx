import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from "gatsby"
import PropTypes from "prop-types"
// import Footer from './Footer';
import Header from './Header';

import * as styles from './Layout.module.scss';

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {
    children: null,
};

const Layout = ({ location, children }) => (
    <>
        <Helmet>
            <meta name="google-site-verification" content="Ky9yMPJJ2VCUAQ6KYjocpKCfQGY6VIwn9Vk_t4w_tNc" />
            {/* <script src={withPrefix('./jquery.min.js')} type="text/javascript" />
            <script src={withPrefix('./common_scripts_min.js')} type="text/javascript" />
            <script src={withPrefix('./functions.js')} type="text/javascript" />
            <script src={withPrefix('./jquery.finaltilesgallery.js')} type="text/javascript" /> */}
        </Helmet>
        <div className={styles.header}>
            <Header />
        </div>
        <main>
            {children}
        </main>
        
    </>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
