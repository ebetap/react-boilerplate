import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import withStyles from '../../../utils/styles/withStyles';
import styles from './styles';

function Search({
 placeholder, type, className, classes,
}) {
  const textInputClass = classNames(classes.root, {
    [className]: className,
  });
  return <input type={type} placeholder={placeholder} className={textInputClass} />;
}

Search.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};

Search.defaultProps = {
  placeholder: 'Insert text',
  type: 'text',
};

export default compose(
  withStyles(styles, {
    name: 'Search',
  }),
)(Search);
