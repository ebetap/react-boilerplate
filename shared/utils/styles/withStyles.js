import React from 'react';
import { withStyles as withStylesMUI } from 'material-ui/styles';
import { isWindowSupported } from '../env-check';

export default function withStylesHOC(styles, options) {
  return (Component) => {
    const MUIComponent = withStylesMUI(styles, options)(Component);
    class withStyles extends React.Component {
      render() {
        if (isWindowSupported() && window.__ISBOOTSTRAPPING) {
          return <Component classes={{}} {...this.props} />;
        }
        return <MUIComponent {...this.props} />;
      }
    }
    return withStyles;
  };
}
