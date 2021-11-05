import React from 'react';
import Helmet from 'react-helmet';
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
