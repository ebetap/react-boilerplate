/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */

import React from 'react';
import PropTypes from 'prop-types';
import uglifyCSS from 'uglifycss';

/**
 * The is the HTML shell for our React Application.
 */
function Skeleton(props) {
  const {
   htmlAttributes,
   headerElements,
   bodyElements,
   appBodyString,
   css,
  } = props;

  return (
    <html {...htmlAttributes}>
      <head>
        {headerElements}
        <style id="jss-server-side" dangerouslySetInnerHTML={{ __html: uglifyCSS.processString(css) }} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: appBodyString }} />
        {bodyElements}
      </body>
    </html>
  );
}

Skeleton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  htmlAttributes: PropTypes.object,
  headerElements: PropTypes.node,
  bodyElements: PropTypes.node,
  appBodyString: PropTypes.string,
  css: PropTypes.string,
};

Skeleton.defaultProps = {
  htmlAttributes: null,
  headerElements: null,
  bodyElements: null,
  appBodyString: '',
};

// EXPORT

export default Skeleton;
