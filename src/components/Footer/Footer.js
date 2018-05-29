import React from 'react';
import styles from './Footer.module.css';
import config from '../../../config/SiteConfig';

const Footer = () => (
  <footer className={styles.footer}>
    {config.copyright} <a href="https://github.com/MaelleBct/gatsby-ethic-blog">Revolutik</a> {' by '}{' '}
    <a href="https://www.revolutik.fr">Maëlle Banctel</a>.
  </footer>
);

export default Footer;
