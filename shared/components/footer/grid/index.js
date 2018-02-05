import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import styles from './styles';
import withStyles from '../../../utils/styles/withStyles';

function FooterGrid({
 className, sectionName, children, classes,
}) {
  const footerGridClass = classNames(classes.root, {
    [className]: className,
  });
  return (
    <div className={footerGridClass}>
      <h5 className={classes.heading}>{sectionName}</h5>
      {children &&
        children.length && (
          <ul className={classes.ul}>
            {children.map((child, key) => (
              <li key={key} className={classes.list}>
                {child}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

FooterGrid.propTypes = {
  className: PropTypes.string,
  sectionName: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.shape({
    root: PropTypes.string,
    ul: PropTypes.string,
    list: PropTypes.string,
    heading: PropTypes.string,
  }),
};

export default compose(
  withStyles(styles, {
    name: 'FooterGrid',
  }),
)(FooterGrid);
