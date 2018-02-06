import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import withStyles from '../../../utils/styles/withStyles';
import styles from './styles';

function Paragraph({ classes, className, children }) {
  return (
    <p className={classNames(classes.root, {
       [className]: className,
     })}>
     {children}
    </p>
  );
}

Paragraph.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  children: PropTypes.string,
};

export default compose(
  withStyles(styles, {
    name: 'Paragraph',
  }),
)(Paragraph);
