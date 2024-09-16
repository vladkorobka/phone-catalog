import React from 'react';
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import { Logo, ChevronIcon } from '../../helpers/icons';
import { scrollToTop } from '../../utils';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          <Logo />
        </NavLink>

        <section className={styles.links}>
          <a
            href="https://github.com/vladkorobka/phone-catalog"
            className={styles.github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/vladyslav-korobka-48273ba7/"
            target="_blank"
            className={styles.contacts}
            rel="noreferrer"
          >
            Contacts
          </a>

          <a href="/#" className={styles.rights} onClick={scrollToTop}>
            Rights
          </a>
        </section>

        <div className={styles.back}>
          <span className={styles.label}>Back to top</span>
          <button
            type="button"
            className={styles.backLink}
            onClick={scrollToTop}
          >
            <ChevronIcon />
          </button>
        </div>
      </div>
    </footer>
  );
};
