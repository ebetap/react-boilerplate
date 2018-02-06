import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import withStyles from '../../../utils/styles/withStyles';
import styles from './styles';

function H3({ classes, className, children }) {
  return (
    <h4 className={classNames(classes.root, {
       [className]: className,
     })}>
     {children}
    </h4>
  );
}

H3.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  children: PropTypes.string,
};

export default compose(
  withStyles(styles, {
    name: 'H3',
  }),
)(H3);
