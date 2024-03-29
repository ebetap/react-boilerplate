import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import styles from './styles';
import withStyles from '../../../utils/styles/withStyles';

class FormErrorMessage extends Component {
  render() {
    const {
     classes,
     className,
     error,
     warning,
     success,
     touched,
    } = this.props;

    if (!touched) return null;

    return (
      <div
        className={classNames(classes.root, {
          [className]: className,
          [classes.error]: error,
          [classes.warning]: !error && warning,
          [classes.success]: !error && !warning && success,
        })}>
        {error}
        {!error && warning}
        {!error && !warning && success}
      </div>
    );
  }
}

FormErrorMessage.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  className: PropTypes.string,
  error: PropTypes.string,
  warning: PropTypes.string,
  success: PropTypes.bool,
  touched: PropTypes.bool,
};

export default compose(
  withStyles(styles, {
    name: 'FormErrorMessage',
  }),
)(FormErrorMessage);
