import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';
import withStyles from '@utils/styles/withStyles';
import Container from '@components/container';
import Page from '@components/page';
import Button from '@components/button';
import * as Paper from '@components/paper';
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
         <Container narrow>
           <Paper.Wrapper>
             <Paper.Heading label="Create a new book" />
             <Paper.Content>
               <FormSample onSubmit={console.log} />
             </Paper.Content>
             <Paper.Footer>
               <Button label="Submit" />
             </Paper.Footer>
           </Paper.Wrapper>
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
