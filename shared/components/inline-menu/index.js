import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import withStyles from '../../utils/styles/withStyles';
import styles from './styles';

function InlineMenu({ children, className, classes }) {
  const inlineMenuClass = classNames(classes.root, {
    [className]: className,
  });
  return (
    <ul className={inlineMenuClass}>
      {children &&
        children.map((child, key) => (
          <li key={key} className={classes.list}>
            {child}
          </li>
        ))}
    </ul>
  );
}

InlineMenu.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
    list: PropTypes.string,
  }),
};

export default compose(
  withStyles(styles, {
    name: 'InlineMenu',
  }),
)(InlineMenu);
