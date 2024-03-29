/**
 * This module is responsible for generating the HTML page response for
 * the react application middleware.
 */

/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';

import config from '../../../config';
import ifElse from '../../../shared/utils/logic/ifElse';
import removeNil from '../../../shared/utils/arrays/removeNil';
import getClientBundleEntryAssets from './getClientBundleEntryAssets';

import ClientConfig from '../../../config/components/ClientConfig';
import HTML from '../../../shared/skeleton';

// PRIVATES

function KeyedComponent({ children }) {
  return Children.only(children);
}

// Resolve the assets (js/css) for the client bundle's entry chunk.
const {
  index,
  all,
  splittedAlpha,
  splittedBeta,
  splittedOmega,
  webpackInitiator,
} = getClientBundleEntryAssets();

function stylesheetTag(stylesheetFilePath) {
  return (
    <link href={stylesheetFilePath} media="screen, projection" rel="stylesheet" type="text/css" />
  );
}

function scriptTag(jsFilePath) {
  return <script type="text/javascript" src={jsFilePath} defer />;
}

// COMPONENT

function ServerHTML(props) {
  const {
    asyncComponentsState,
    helmet,
    jobsState,
    nonce,
    reactAppString,
    routerState,
    storeState,
    css,
  } = props;

  // Creates an inline script definition that is protected by the nonce.
  const inlineScript = body => (
    <script nonce={nonce} type="text/javascript" dangerouslySetInnerHTML={{ __html: body }} />
  );

  const headerElements = removeNil([
    ...ifElse(helmet)(() => helmet.meta.toComponent(), []),
    ...ifElse(helmet)(() => helmet.title.toComponent(), []),
    ...ifElse(helmet)(() => helmet.base.toComponent(), []),
    ...ifElse(helmet)(() => helmet.link.toComponent(), []),
    ifElse(all && all.css)(() => stylesheetTag(all.css)),
    ifElse(splittedAlpha && splittedAlpha.css)(() => stylesheetTag(splittedAlpha.css)),
    ifElse(splittedBeta && splittedBeta.css)(() => stylesheetTag(splittedBeta.css)),
    ifElse(splittedOmega && splittedOmega.css)(() => stylesheetTag(splittedOmega.css)),
    ifElse(index && index.css)(() => stylesheetTag(index.css)),
    ...ifElse(helmet)(() => helmet.style.toComponent(), []),
  ]);

  const bodyElements = removeNil([
    // Bind our redux store state so the client knows how to hydrate his one
    ifElse(storeState)(() => inlineScript(`window.__APP_STATE__=${serialize(storeState)};`)),

    // Binds the client configuration object to the window object so
    // that we can safely expose some configuration values to the
    // client bundle that gets executed in the browser.
    <ClientConfig nonce={nonce} />,

    // Bind our async components state so the client knows which ones
    // to initialise so that the checksum matches the server response.
    // @see https://github.com/ctrlplusb/react-async-component
    ifElse(asyncComponentsState)(() =>
      inlineScript(`window.__ASYNC_COMPONENTS_REHYDRATE_STATE__=${serialize(asyncComponentsState)};`)),

    ifElse(jobsState)(() => inlineScript(`window.__JOBS_STATE__=${serialize(jobsState)}`)),

    ifElse(routerState)(() => inlineScript(`window.__ROUTER_STATE__=${serialize(routerState)}`)),

    // Enable the polyfill io script?
    // This can't be configured within a react-helmet component as we
    // may need the polyfill's before our client JS gets parsed.
    ifElse(config('polyfillIO.enabled'))(() =>
      scriptTag(`${config('polyfillIO.url')}?features=${config('polyfillIO.features').join(',')}`)),
    // When we are in development mode our development server will
    // generate a vendor DLL in order to dramatically reduce our
    // compilation times.  Therefore we need to inject the path to the
    // vendor dll bundle below.
    ifElse(process.env.BUILD_FLAG_IS_DEV === 'true' && config('bundles.client.devVendorDLL.enabled'))(() =>
      scriptTag(`${config('bundles.client.webPath')}${config('bundles.client.devVendorDLL.name')}.js?t=${Date.now()}`)),
    ifElse(webpackInitiator && webpackInitiator.js)(() => scriptTag(webpackInitiator.js)),
    ifElse(all && all.js)(() => scriptTag(all.js)),
    ifElse(splittedAlpha && splittedAlpha.js)(() => scriptTag(splittedAlpha.js)),
    ifElse(splittedBeta && splittedBeta.js)(() => scriptTag(splittedBeta.js)),
    ifElse(splittedOmega && splittedOmega.js)(() => scriptTag(splittedOmega.js)),
    ifElse(index && index.js)(() => scriptTag(index.js)),
    ...ifElse(helmet)(() => helmet.script.toComponent(), []),
  ]);

  return (
    <HTML
      htmlAttributes={ifElse(helmet)(() => helmet.htmlAttributes.toComponent(), null)}
      headerElements={headerElements.map((x, idx) =>
        (<KeyedComponent key={idx}>
          {x}
         </KeyedComponent>),
      )}
      bodyElements={bodyElements.map((x, idx) =>
        (<KeyedComponent key={idx}>
          {x}
         </KeyedComponent>),
      )}
      appBodyString={reactAppString}
      css={css}
    />
  );
}

ServerHTML.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  asyncComponentsState: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  helmet: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  jobsState: PropTypes.object,
  nonce: PropTypes.string,
  reactAppString: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  routerState: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  storeState: PropTypes.object,
  css: PropTypes.string,
};

// EXPORT

export default ServerHTML;
