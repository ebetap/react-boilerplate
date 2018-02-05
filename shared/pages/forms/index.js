import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import withStyles from '@utils/styles/withStyles';
import Container from '@components/container';
import Page from '@components/page';
import FormSample from './form-sample';
import styles from './styles';

class Forms extends Component {
  render() {
    const { classes, className } = this.props;
    return (
      <div className={classNames(classes.root, {
         [className]: className,
       })}>
       <Page>
         <Container>
           <FormSample onSubmit={console.log} />
         </Container>
       </Page>
      </div>
    );
  }
}

Forms.propTypes = {
  classes: PropTypes.shape({
     root: PropTypes.string,
   }),
  className: PropTypes.string,
};

export default compose(
  withStyles(styles, {
    name: 'Forms',
  }),
)(Forms);
