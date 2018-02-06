import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import withStyles from '../../../utils/styles/withStyles';
import styles from './styles';

function Span({ classes, className, children }) {
  return (
    <span className={classNames(classes.root, {
       [className]: className,
     })}>
     {children}
    </span>
  );
}

Span.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  children: PropTypes.string,
};

export default compose(
  withStyles(styles, {
    name: 'Span',
  }),
)(Span);
