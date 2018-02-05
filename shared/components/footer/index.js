import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import withStyles from '../../utils/styles/withStyles';
import Container from '../container';
import GithubLogoText from '../../svgs/github-logo-text';
import FooterGrid from './grid';
import styles from './styles';

function Footer({ className, classes }) {
  const footerClass = classNames(classes.root, {
    [className]: className,
  });
  return (
    <div className={footerClass}>
      <Container>
        <div className={classes.row}>
          <div className={classes.grid}>
            <div className={classes.logo}>
              <a href="/">
                <GithubLogoText />
              </a>
            </div>
            <div className={classes.copyright}>© 2017</div>
          </div>
          <div className={classes.grid}>
            <FooterGrid sectionName="Features">
              <a className={classes.link} href="/">
                Code review
              </a>
              <a className={classes.link} href="/">
                Project management
              </a>
              <a className={classes.link} href="/">
                Community
              </a>
              <a className={classes.link} href="/">
                Documentation
              </a>
              <a className={classes.link} href="/">
                Code hosting
              </a>
            </FooterGrid>
          </div>
          <div className={classes.grid}>
            <FooterGrid sectionName="Platform">
              <a className={classes.link} href="/">
                Atom
              </a>
              <a className={classes.link} href="/">
                Electron
              </a>
              <a className={classes.link} href="/">
                GitHub Desktop
              </a>
              <a className={classes.link} href="/">
                Developers
              </a>
            </FooterGrid>
          </div>
          <div className={classes.grid}>
            <FooterGrid sectionName="Community">
              <a className={classes.link} href="/">
                Personal
              </a>
              <a className={classes.link} href="/">
                Open source
              </a>
              <a className={classes.link} href="/">
                Business
              </a>
              <a className={classes.link} href="/">
                Education
              </a>
              <a className={classes.link} href="/">
                Customers
              </a>
              <a className={classes.link} href="/">
                Partners
              </a>
              <a className={classes.link} href="/">
                Sponsorships
              </a>
            </FooterGrid>
          </div>
          <div className={classes.grid}>
            <FooterGrid sectionName="Company">
              <a className={classes.link} href="/">
                About
              </a>
              <a className={classes.link} href="/">
                Blog
              </a>
              <a className={classes.link} href="/">
                Careers
              </a>
              <a className={classes.link} href="/">
                Press
              </a>
              <a className={classes.link} href="/">
                Shop
              </a>
            </FooterGrid>
          </div>
          <div className={classes.grid}>
            <FooterGrid sectionName="Resources">
              <a className={classes.link} href="/">
                Contact GitHub
              </a>
              <a className={classes.link} href="/">
                Help
              </a>
              <a className={classes.link} href="/">
                Status
              </a>
              <a className={classes.link} href="/">
                Terms
              </a>
              <a className={classes.link} href="/">
                Privacy
              </a>
              <a className={classes.link} href="/">
                Security
              </a>
              <a className={classes.link} href="/">
                Training
              </a>
            </FooterGrid>
          </div>
        </div>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
    row: PropTypes.string,
    grid: PropTypes.string,
    link: PropTypes.string,
  }),
};

export default compose(
  withStyles(styles, {
    name: 'Footer',
  }),
)(Footer);
