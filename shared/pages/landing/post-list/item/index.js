import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import withStyles from '../../../../utils/styles/withStyles';
import styles from './styles';

function PostListItem({
 className, imageURL, name, description, classes,
}) {
  const portalListItemClass = classNames(classes.root, {
    [className]: className,
  });
  return (
    <a href="#/" className={portalListItemClass}>
      <span style={{ backgroundImage: `url(${imageURL})` }} className={classes.image} />
      <h4 className={classes.name}>{name}</h4>
      <p className={classes.description}>{description}</p>
    </a>
  );
}

PostListItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  classes: PropTypes.shape({
    root: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default compose(
  withStyles(styles, {
    name: 'PostListItem',
  }),
)(PostListItem);
