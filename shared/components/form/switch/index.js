import { FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import FormErrorMessage from '../error-message';
import withStyles from '../../../utils/styles/withStyles';
import styles from './styles';

class SwitchComponent extends Component {
  render() {
    const {
      classes,
      className,
      label,
      input: {
        value,
        onChange,
        onBlur,
      },
      meta: {
        touched,
        error,
        warning,
        valid,
      },
    } = this.props;

    return (
      <div
        className={classNames(classes.root, {
          [className]: className,
        })}>
        <FormControlLabel
          label={label}
          control={(
            <Switch
              checked={value}
              onChange={(event, checked) => {
                onChange(checked);
                onBlur(checked);
              }} />
          )} />
        <FormErrorMessage
          touched={touched}
          error={error}
          warning={warning}
          success={valid} />
      </div>
    );
  }
}

SwitchComponent.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  className: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.any,
    onChange: PropTypes.func,
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
    valid: PropTypes.bool,
  }),
};

export default compose(
  withStyles(styles, {
    name: 'SwitchComponent',
  }),
)(SwitchComponent);
