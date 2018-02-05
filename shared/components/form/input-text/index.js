import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';
import FormLabel from '../label';
import FormErrorMessage from '../error-message';
import styles from './styles';
import withStyles from '../../../utils/styles/withStyles';

class InputText extends Component {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(e) {
    const { onEnter } = this.props;
    if (e.key === 'Enter' && onEnter) {
      onEnter();
    }
  }
  render() {
    const {
      classes,
      className,
      placeholder,
      multiline,
      autoFocus,
      label,
      type,
      input,
      meta: {
        touched,
        error,
        warning,
        valid,
      },
    } = this.props;

    return (
      <div>
        <FormLabel label={label} />
        <TextField
          autoFocus={autoFocus}
          type={type}
          placeholder={placeholder}
          className={classNames(classes.root, {
            [className]: className,
          })}
          multiline={multiline}
          rows={4}
          rowsMax={6}
          InputProps={{
            ...input,
            onKeyPress: this.handleKeyPress,
            disableUnderline: true,
            classes: {
              root: classes.textFieldRoot,
              input: classNames(classes.textFieldInput, {
                [classes.multiline]: multiline,
              }),
            },
          }} />
        <FormErrorMessage
          touched={touched}
          error={error}
          warning={warning}
          success={valid} />
      </div>
    );
  }
}

InputText.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onEnter: PropTypes.func,
  multiline: PropTypes.bool,
  autoFocus: PropTypes.bool,
  input: PropTypes.shape({
    value: PropTypes.string,
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
    name: 'InputText',
  }),
)(InputText);
