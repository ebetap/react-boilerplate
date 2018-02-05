import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import Input from 'material-ui/Input';
import Select from 'material-ui/Select';
import { FormField } from 'react-form';
import { MenuItem } from 'material-ui/Menu';
import withStyles from '../../../utils/styles/withStyles';
import FormLabel from '../label';
import FormErrorMessage from '../error-message';
import styles from './styles';

class SelectForm extends React.Component {
  render() {
    const {
      classes,
      className,
      label,
      options,
      input,
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
        <Select
          autoWidth
          value={input.value}
          onChange={(event) => {
            input.onChange(event);
          }}
          displayEmpty
          input={<Input className={classes.inputRoot} />}
          classes={{
            root: classes.selectRoot,
            select: classes.selectRoot,
            selectMenu: classes.selectMenu,
          }}>
          {options &&
            !!options.length &&
            options.map((option, key) => (
              <MenuItem key={key} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
        </Select>
        <FormErrorMessage
          touched={touched}
          error={error}
          warning={warning}
          success={valid} />
      </div>
    );
  }
}

SelectForm.propTypes = {
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
  ).isRequired,
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
    name: 'Select',
  }),
)(SelectForm);
