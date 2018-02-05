import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import withStyles from '../../utils/styles/withStyles';
import Container from '../container';
import Search from './search';
import InlineMenu from '../inline-menu';
import GithubLogo from '../../svgs/github-logo';
import styles from './styles';

function Header({ classes, className }) {
  const headerClass = classNames(classes.header, {
    [className]: className,
  });
  return (
    <div>
      <div className={headerClass}>
        <Container>
          <div className={classes.row}>
            <div className={classes.leftside}>
              <div className={classes.logo}>
                <Link to="/">
                  <GithubLogo className={classes.logoImage} />
                </Link>
              </div>
              <div className={classes.search}>
                <Search />
              </div>
              <div className={classes.navbarMenu}>
                <InlineMenu>
                  <Link to="/components" className={classes.link}>
                    Components
                  </Link>
                  <a href="/" className={classes.link}>
                    Layouts
                  </a>
                  <Link to="/signup" className={classes.link}>
                    Modules
                  </Link>
                </InlineMenu>
              </div>
            </div>
            <div className={classes.rightside}>
              <div>
                <div className={classes.authButton}>
                  <Link
                    to="/signin"
                    className={classNames(classes.authButtonItem, classes.authButtonSignin)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className={classNames(classes.authButtonItem, classes.authButtonSignup)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({
    header: PropTypes.string,
    row: PropTypes.string,
    search: PropTypes.string,
    navbarMenu: PropTypes.string,
    leftside: PropTypes.string,
    rightside: PropTypes.string,
    profileImage: PropTypes.string,
    profileImageImg: PropTypes.string,
    logo: PropTypes.string,
    authButtonItem: PropTypes.string,
    authButtonSignup: PropTypes.string,
    authButtonSignin: PropTypes.string,
  }),
};

export default compose(
  withStyles(styles, {
    name: 'Header',
  }),
)(Header);
