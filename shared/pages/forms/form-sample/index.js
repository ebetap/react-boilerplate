import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import { reduxForm, Field } from 'redux-form';
import withStyles from '@utils/styles/withStyles';
import FormItem from '@components/form/item';
import InputText from '@components/form/input-text';
import Select from '@components/form/select';
import Multiselect from '@components/form/multiselect';
import Switch from '@components/form/switch';
import RichEditor from '@components/form/rich-editor';
import styles from './styles';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (values.email.length > 15) {
    errors.email = 'Must be 15 characters or less';
  }
  return errors;
};

function FormSample({
  classes,
  className,
  handleSubmit,
  pristine,
  reset,
  submitting,
}) {
  return (
    <div className={classNames(classes.root, {
       [className]: className,
     })}>
     <form onSubmit={handleSubmit}>
       <FormItem>
         <Field
           name="email"
           component={InputText}
           label="Email" />
       </FormItem>
       <FormItem>
         <Field
           name="switch"
           component={Switch}
           label="Swutch" />
       </FormItem>
       <FormItem>
         <Field
           name="editor"
           component={RichEditor}
           label="Editor"
           sublabel="(Optional)" />
       </FormItem>
       <FormItem>
         <Field
           name="ok"
           component={Select}
           label="Oke"
           options={[{
             name: 'ok',
             value: 'Oke',
           }]} />
       </FormItem>
       <FormItem>
         <Field
           name="ok1"
           component={Multiselect}
           label="Oke"
           options={[{
             name: 'ok',
             value: 'Oke',
           }, {
             name: 'ok 2',
             value: 'DS',
           }]} />
       </FormItem>
       <div>
         <button type="submit" disabled={submitting}>
           Submit
         </button>
         <button type="button" disabled={pristine || submitting} onClick={reset}>
           Clear Values
         </button>
       </div>
     </form>
    </div>
  );
}

FormSample.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
};

export default compose(
  withStyles(styles, {
    name: 'FormSample',
  }),
  reduxForm({
    form: 'sampleForm',
    validate,
  }),
)(FormSample);
