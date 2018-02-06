const styles = theme => ({
  inputRoot: {
    width: '100%',
    '&:before': {
      display: 'none',
    },
    '&:after': {
      display: 'none',
    },
  },
  selectMenu: {
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
      borderRadius: theme.utils.toRem(3),
      background: 'inherit',
    },
  },
});

export default styles;
