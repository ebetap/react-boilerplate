/* eslint-disable global-require */

import React from 'react';
import { hydrate } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import asyncBootstrapper from 'react-async-bootstrapper';
import { AsyncComponentProvider } from 'react-async-component';
import { JobProvider } from 'react-jobs';
import { Provider } from 'react-redux';
import JssProvider from 'react-jss/lib/JssProvider'; // eslint-disable-line
import { MuiThemeProvider } from 'material-ui/styles';
import './polyfills';

import ReactHotLoader from './components/ReactHotLoader';
import App from '../shared/app';
import getStore from './get-store';
import theme from '../shared/theme';
import jss from '../shared/jss';

const store = getStore();

// Get the DOM Element that will host our React application.
const container = document.querySelector('#app');

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
const supportsHistory = 'pushState' in window.history;

// Get any rehydrateState for the async components.
// eslint-disable-next-line no-underscore-dangle
const asyncComponentsRehydrateState = window.__ASYNC_COMPONENTS_REHYDRATE_STATE__;

// Get any "rehydrate" state sent back by the server
// eslint-disable-next-line no-underscore-dangle
const rehydrateState = window.__JOBS_STATE__;

/**
 * Renders the given React Application component.
 */

function renderApp(TheApp) {
  // Firstly, define our full application component, wrapping the given
  // component app with a browser based version of react router.
  const app = (isBootstrapping) => {
    window.__ISBOOTSTRAPPING = isBootstrapping;
    return (
      <ReactHotLoader key={Math.random()}>
        <AsyncComponentProvider rehydrateState={asyncComponentsRehydrateState}>
          <JobProvider rehydrateState={rehydrateState}>
            <JssProvider jss={jss}>
              <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                  <BrowserRouter forceRefresh={!supportsHistory}>
                    <TheApp />
                  </BrowserRouter>
                </Provider>
              </MuiThemeProvider>
            </JssProvider>
          </JobProvider>
        </AsyncComponentProvider>
      </ReactHotLoader>
    );
  };

  // We use the react-async-component in order to support code splitting of
  // our bundle output. It's important to use this helper.
  // @see https://github.com/ctrlplusb/react-async-component
  asyncBootstrapper(app(true)).then(() => hydrate(app(false), container));
}

// Execute the first render of our app.
renderApp(App);

// This registers our service worker for asset caching and offline support.
// Keep this as the last item, just in case the code execution failed (thanks
// to react-boilerplate for that tip.)
require('./registerServiceWorker');

// The following is needed so that we can support hot reloading our application.
if (process.env.BUILD_FLAG_IS_DEV === 'true' && module.hot) {
  module.hot.dispose((data) => {
    // Deserialize store and keep in hot module data for next replacement
    data.store = stringify(toJS(store)); // eslint-disable-line
  });

  // Accept changes to this file for hot reloading.
  module.hot.accept('./index.js');
  // Any changes to our App will cause a hotload re-render.
  module.hot.accept('../shared/app', () => {
    renderApp(require('../shared/app').default);
  });
}
