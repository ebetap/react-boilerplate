const styles = theme => ({
  root: {
    '& .public-DraftEditorPlaceholder-root': {
      position: 'absolute',
      fontSize: theme.utils.toRem(14),
      color: '#969696',
    },
    '& .DraftEditor-root': {
      padding: theme.utils.toRem(12),
      border: theme.utils.toRem('1px solid #e8eaed'),
      borderRadius: theme.utils.toRem(3),
      backgroundColor: '#fff',
      '&:focus': {
        borderColor: '#58baff',
      },
    },
    '& .public-DraftEditor-content': {
      minHeight: theme.utils.toRem(200),
    },
    '& figure': {
      margin: theme.utils.toRem(15, 0),
    },
  },
});

export default styles;
