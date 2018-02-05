import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';
import withStyles from '../../utils/styles/withStyles';
import styles from './styles';

function AuthLayout({
  classes,
  className,
  children,
  name,
  illustrationImageUri,
  heading,
  description,
}) {
  return (
    <div
      className={classNames(classes.root, {
        [className]: className,
      })}
    >
      <Grid container>
        <Grid item xs={7} className={classes.illustration}>
          <div className={classes.illustrationImageWrapper}>
            <img className={classes.illustrationImage} src={illustrationImageUri} alt={name} />
          </div>
        </Grid>
        <Grid item xs={5}>
          <h2 className={classes.heading}>{heading}</h2>
          <div className={classes.description}>{description}</div>
          <div className={classes.form}>{children}</div>
        </Grid>
      </Grid>
    </div>
  );
}

AuthLayout.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    row: PropTypes.string,
    grid: PropTypes.string,
    illustration: PropTypes.string,
    illustrationImage: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    form: PropTypes.string,
  }),
  className: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  illustrationImageUri: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

export default compose(
  withStyles(styles, {
    name: 'AuthLayout',
  }),
)(AuthLayout);
