import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import styles from './styles';
import withStyles from '../../utils/styles/withStyles';

function Container({
  children,
  className,
  wide,
  narrow,
  classes,
}) {
  const containerClass = classNames(classes.root, {
    [className]: className,
    [classes.wide]: wide,
    [classes.narrow]: narrow,
  });
  return <div className={containerClass}>{children}</div>;
}

Container.propTypes = {
  className: PropTypes.string,
  wide: PropTypes.bool,
  narrow: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.shape({
    root: PropTypes.string,
    wide: PropTypes.string,
  }),
};

export default compose(
  withStyles(styles, {
    name: 'Container',
  }),
)(Container);
