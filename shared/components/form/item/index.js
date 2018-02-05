import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import styles from './styles';
import withStyles from '../../../utils/styles/withStyles';

class FormItem extends Component {
  render() {
    const { classes, className, children } = this.props;

    if (children.length) {
      return (
        <div
          className={classNames(classes.root, classes.columnSplit, {
            [className]: className,
          })}
        >
          {children.map((child, key) => (
            <div className={classes.columnSplitGrid} key={key}>
              <div className={classes.formItem}>{child}</div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div
        className={classNames(classes.root, classes.formItem, {
          [className]: className,
        })}
      >
        {children}
      </div>
    );
  }
}

FormItem.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

export default compose(
  withStyles(styles, {
    name: 'FormItem',
  }),
)(FormItem);
