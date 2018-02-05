const styles = theme => ({
  root: {
    outline: '0',
    minHeight: theme.utils.toRem(30),
    fontSize: theme.utils.toRem(13),
    color: 'inherit',
    borderRadius: theme.utils.toRem(43),
    padding: theme.utils.toRem(6, 18),
    border: theme.utils.toRem('1px solid #eaecef'),
    width: '100%',
    '&::-webkit-input-placeholder': {
      color: 'inherit',
      opacity: '0.54',
    },
  },
});

export default styles;
