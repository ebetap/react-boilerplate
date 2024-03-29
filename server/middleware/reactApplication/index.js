import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import { JobProvider, createJobContext } from 'react-jobs';
import asyncBootstrapper from 'react-async-bootstrapper';
import { SheetsRegistry } from 'react-jss/lib/jss'; // eslint-disable-line
import JssProvider from 'react-jss/lib/JssProvider'; // eslint-disable-line
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import getStore from './getStore';
import config from '../../../config';
import App from '../../../shared/app';
import theme from '../../../shared/theme';
import jss from '../../../shared/jss';
import { log } from '../../../internal/utils';
import ServerHTML from './ServerHTML';

export default function reactApplicationMiddleware(request, response) {
  // Ensure a nonce has been provided to us.
  // See the server/middleware/security.js for more info.
  if (typeof response.locals.nonce !== 'string') {
    throw new Error('A "nonce" value has not been attached to the response');
  }
  const { nonce } = response.locals;

  // It's possible to disable SSR, which can be useful in development mode.
  // In this case traditional client side only rendering will occur.
  if (config('disableSSR')) {
    if (process.env.BUILD_FLAG_IS_DEV === 'true') {
      // eslint-disable-next-line no-console
      log({
        title: 'Server',
        level: 'info',
        message: `Handling react route without SSR: ${request.url}`,
      });
    }
    // SSR is disabled so we will return an "empty" html page and
    // rely on the client to initialize and render the react application.
    const html = renderToStaticMarkup(<ServerHTML nonce={nonce} />);
    response.status(200).send(`<!DOCTYPE html>${html}`);
    return;
  }

  // Create a context for our AsyncComponentProvider.
  const asyncComponentsContext = createAsyncContext();

  // Create a context for <StaticRouter>, which will allow us to
  // query for the results of the render.
  const reactRouterContext = {};

  // Create the job context for our provider, this grants
  // us the ability to track the resolved jobs to send back to the client.
  const jobContext = createJobContext();
  /*
   * getToken method will be passed to redux thunk extra argument
   * it must be a promise to mimic app.passport.getJWT() from feathersjs/authentication-client
   */

  const store = getStore();
  const sheetsRegistry = new SheetsRegistry();
  // Declare our React application.
  const app = (
    <AsyncComponentProvider asyncContext={asyncComponentsContext}>
      <JobProvider jobContext={jobContext}>
        <JssProvider registry={sheetsRegistry} jss={jss}>
          <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
            <StaticRouter location={request.url} context={reactRouterContext}>
              <Provider store={store}>
                <App />
              </Provider>
            </StaticRouter>
          </MuiThemeProvider>
        </JssProvider>
      </JobProvider>
    </AsyncComponentProvider>
  );

  // Pass our app into the react-async-component helper so that any async
  // components are resolved for the render.
  asyncBootstrapper(app).then(() => {
    const appString = renderToString(app);
    const css = sheetsRegistry.toString();
    // Generate the html response.
    const html = renderToStaticMarkup(
      <ServerHTML
        css={css}
        reactAppString={appString}
        nonce={nonce}
        helmet={Helmet.rewind()}
        storeState={store.getState()}
        routerState={reactRouterContext}
        jobsState={jobContext.getState()}
        asyncComponentsState={asyncComponentsContext.getState()}
      />,
    );

    // Check if the router context contains a redirect, if so we need to set
    // the specific status and redirect header and end the response.
    if (reactRouterContext.url) {
      response.status(302).setHeader('Location', reactRouterContext.url);
      response.end();
      return;
    }

    response
      .status(
        reactRouterContext.missed
          ? // If the renderResult contains a "missed" match then we set a 404 code.
          // Our App component will handle the rendering of an Error404 view.
          404
          : // Otherwise everything is all good and we send a 200 OK status.
          200,
      )
      .send(`<!DOCTYPE html>${html}`);
  });
}
