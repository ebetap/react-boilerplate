import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import withStyles from '@utils/styles/withStyles';
import styles from './styles';

function Paper({ classes, className, children }) {
  return (
    <div className={classNames(classes.root, {
       [className]: className,
     })}>
     {children}
    </div>
  );
}

Paper.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default compose(
  withStyles(styles, {
    name: 'Paper',
  }),
)(Paper);
