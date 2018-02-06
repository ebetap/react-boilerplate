import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import withStyles from '@utils/styles/withStyles';
import { H4 } from '@components/typography';
import styles from './styles';

function PaperHeading({ classes, className, label }) {
  return (
    <div className={classNames(classes.root, {
       [className]: className,
     })}>
     <H4>{label}</H4>
    </div>
  );
}

PaperHeading.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  label: PropTypes.string,
};

export default compose(
  withStyles(styles, {
    name: 'PaperHeading',
  }),
)(PaperHeading);
