import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import MaterialUiButton from 'material-ui/Button';
import compose from 'recompose/compose';
import classNames from 'classnames';
import styles from './styles';
import withStyles from '../../utils/styles/withStyles';

/**
 * General purpose button, built on top of Material-UI button
 */
class Button extends Component {
  getProps() {
    const {
     to,
     onClick,
     raised,
     disabled,
    } = this.props;

    const props = {
      raised,
      disabled,
    };

    if (to) {
      props.component = Link;
      props.to = to;
    } else if (onClick) {
      props.onClick = onClick;
    }

    if (raised) {
      props.color = 'accent';
    }

    return props;
  }
  render() {
    const {
      classes,
      className,
      icon,
      label,
      disabled,
      leftIcon,
      rightIcon,
      raised,
      leftGutter,
      rightGutter,
      small,
      color,
    } = this.props;

    const buttonProps = this.getProps();
    const LeftIcon = leftIcon;
    const RightIcon = rightIcon;

    if (icon) {
      return (
        <IconButton
          disabled={disabled}
          className={classes.iconButton}
          aria-label={label}>
          {icon}
        </IconButton>
      );
    }

    return (
      <MaterialUiButton
        {...buttonProps}
        color={color}
        className={classNames(classes.root, {
          [className]: className,
          [classes.noLabel]: !label,
          [classes.raised]: raised,
          [classes.leftGutter]: leftGutter,
          [classes.rightGutter]: rightGutter,
          [classes.small]: small,
        })}>
        {leftIcon && (
          <span className={classNames(classes.iconWrapper, classes.leftIcon)}>
            <LeftIcon className={classes.icon} />
          </span>
        )}
        {label}
        {rightIcon && (
          <span className={classNames(classes.iconWrapper, classes.rightIcon)}>
            <RightIcon className={classes.icon} />
          </span>
        )}
      </MaterialUiButton>
    );
  }
}

Button.propTypes = {
  /**
   * Internal classNames used by Button component
   */
  classes: PropTypes.shape({
    root: PropTypes.string,
    iconButton: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    raised: PropTypes.string,
    noLabel: PropTypes.string,
  }),
  /**
   * Root classname to override
   */
  className: PropTypes.string,
  /**
   * React router path if no onClick callback specified
   */
  to: PropTypes.string,
  /**
   * Function call when button clicked
   */
  onClick: PropTypes.func,
  /**
   * React Node on the left on the button content, use for icon
   */
  leftIcon: PropTypes.node,
  /**
   * React Node on the right on the button content, use for icon
   */
  rightIcon: PropTypes.node,
  /**
   * Button label
   */
  label: PropTypes.string,
  /**
   * Use icon instead of string for button content
   */
  icon: PropTypes.node,
  /**
   * Toggle raised type button
   */
  raised: PropTypes.bool,
  disabled: PropTypes.bool,
  /**
   * Add margin left to the button
   */
  leftGutter: PropTypes.bool,
  /**
   * Add margin right to the button
   */
  rightGutter: PropTypes.bool,
  /**
   * Render smaller button
   */
  small: PropTypes.bool,
  /**
   * Override button color
   */
  color: PropTypes.string,
};

Button.defaultProps = {
  raised: true,
  color: 'primary',
};

export default compose(
  withStyles(styles, {
    name: 'Button',
  }),
)(Button);
