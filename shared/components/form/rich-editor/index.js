/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';
import RichUtils from 'draft-js/lib/RichTextEditorUtil';
import Editor, { composeDecorators } from 'draft-js-plugins-editor';
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
import EditorState from 'draft-js/lib/EditorState';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';
import 'draft-js-image-plugin/lib/plugin.css';
import 'draft-js-focus-plugin/lib/plugin.css';
import 'draft-js-alignment-plugin/lib/plugin.css';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';
import FormLabel from '../label';
import FormErrorMessage from '../error-message';
import withStyles from '../../../utils/styles/withStyles';
import styles from './styles';

// Load draftJS plugins
const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    CodeButton,
    Separator,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
  ],
});
const sideToolbarPlugin = createSideToolbarPlugin();
const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();

// Decorator for image
const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator,
);

const imagePlugin = createImagePlugin({ decorator });

// Load draftjs component's plugins
const { InlineToolbar } = inlineToolbarPlugin;
const { SideToolbar } = sideToolbarPlugin;
const { AlignmentTool } = alignmentPlugin;

// Define plugins
const plugins = [
  inlineToolbarPlugin,
  sideToolbarPlugin,
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin,
];

class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    if (props.getRefs) {
      props.getRefs({
        getEditorState: () => props.input.value,
        setEditorState: (editorState) => {
          props.input.onChange(editorState);
        },
      });
    }
  }
  componentWillUpdate(nextProps) {
    const { value } = nextProps.input;
    if (this.props.input.value !== value && value === '') {
      this.populateEmptyState();
    }
  }
  componentDidMount() {
    this.populateEmptyState();
  }
  populateEmptyState() {
    const { input: { onChange } } = this.props;
    const editorState = EditorState.createEmpty();
    onChange(editorState);
  }
  handleOnChange(editorState) {
    const { input: { onChange } } = this.props;
    onChange(editorState);
  }
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.handleOnChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  render() {
    const {
      className,
      classes,
      label,
      sublabel,
      input: {
        value,
        onBlur,
      },
      meta: {
        touched,
        error,
        warning,
        valid,
      },
    } = this.props;

    const richEditorClass = classNames(classes.root, {
      [className]: className,
    });

    if (!value) return null;

    return (
      <div
        className={richEditorClass}
        onClick={() => this.activeEditor.focus()}>
        <FormLabel
          label={label}
          sublabel={sublabel} />
        <Editor
          className={classes.editor}
          onBlur={() => onBlur()}
          ref={(activeEditor) => { this.activeEditor = activeEditor; }}
          editorState={value}
          placeholder="Enter.."
          handleKeyCommand={this.handleKeyCommand}
          plugins={plugins}
          onChange={this.handleOnChange} />
        <FormErrorMessage
          touched={touched}
          error={error}
          warning={warning}
          success={valid} />
        <InlineToolbar />
        <SideToolbar />
        <AlignmentTool />
      </div>
    );
  }
}

RichEditor.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  sublabel: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  input: PropTypes.shape({
    value: PropTypes.any,
    onChange: PropTypes.func,
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
    valid: PropTypes.bool,
  }),
  getRefs: PropTypes.func,
};

export default compose(
  withStyles(styles, {
    name: 'RichEditor',
  }),
)(RichEditor);
