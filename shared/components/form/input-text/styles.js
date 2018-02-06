const styles = theme => ({
  root: {
    display: 'flex',
  },
  textFieldRoot: {
    display: 'flex',
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    boxSizing: 'border-box',
    fontSize: theme.utils.toRem(14),
    height: theme.utils.toRem(34),
    width: '100%',
    border: theme.utils.toRem('1px solid #e8eaed'),
    background: '#fff',
    outline: '0',
    color: '#333',
    padding: theme.utils.toRem('6px 12px'),
    borderRadius: theme.utils.toRem(3),
    '&:focus': {
      borderColor: '#58baff',
    },
  },
  multiline: {
    height: '100%',
  },
});

export default styles;
