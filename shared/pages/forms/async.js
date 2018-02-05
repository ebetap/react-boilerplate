import React from 'react';
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => import(/* webpackChunkName: "forms" */ './'),
  LoadingComponent: () => <div>Loading</div>,
});
