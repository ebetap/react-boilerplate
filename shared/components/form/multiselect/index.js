import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';
import FormLabel from '../label';
import FormErrorMessage from '../error-message';
import styles from './styles';
import withStyles from '../../../utils/styles/withStyles';

class Multiselect extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange(event, slug, checked) {
    const { input: { onBlur, onChange, value } } = this.props;
    let valueArray;
    if (checked) {
      valueArray = []
        .concat(value, slug)
        .filter(val => (val !== ''));
    } else {
      valueArray = value
        .filter(val => (val !== slug && val !== ''));
    }
    // Set value
    onChange(valueArray);
    onBlur(valueArray);
  }
  render() {
    const {
     classes,
     className,
     label,
     options,
     grid,
     input: {
       value,
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
        <FormLabel label={label} />
        <div
          className={classNames(classes.optionsWrapper, {
            [classes.grid]: grid,
          })}>
          {options &&
            options.length &&
            options.map((option, key) => (
              <FormControlLabel
                className={classNames(classes.formLabel, {
                  [classes.formLabelGrid]: grid,
                })}
                key={key}
                label={option.name}
                control={(
                  <Checkbox
                    className={classes.checkbox}
                    onChange={(event, checked) => this.onChange(event, option.value, checked)}
                    checked={value && !!value.length && value.includes(option.value)} />
                )}
              />
            ))}
        </div>
        <FormErrorMessage
          touched={touched}
          error={error}
          warning={warning}
          success={valid} />
      </div>
    );
  }
}

Multiselect.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  className: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  grid: PropTypes.bool,
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
    name: 'Multiselect',
  }),
)(Multiselect);
