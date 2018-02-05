import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form as ReactForm } from 'react-form';

class Form extends Component {
  render() {
    const {
      children,
      errorValidator,
      setValues,
      getSubmitRef,
      onSubmit,
      values,
    } = this.props;
    return (
      <ReactForm
        defaultValues={values}
        validateError={errorValidator}
        getApi={formApi => getSubmitRef && getSubmitRef(formApi.submitForm)}
        formDidUpdate={formState => setValues(formState.values)}
        onSubmit={val => onSubmit && onSubmit(val)}>
        { formApi => (
          <form onSubmit={formApi.submitForm}>
            {children}
          </form>
        )}
      </ReactForm>
    );
  }
}

Form.propTypes = {
  values: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.node]),
  errorValidator: PropTypes.func,
  setValues: PropTypes.func,
  getSubmitRef: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Form;
