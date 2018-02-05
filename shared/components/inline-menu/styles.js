const styles = theme => ({
  root: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
  },
  list: {
    paddingLeft: theme.utils.toRem(8),
    paddingRight: theme.utils.toRem(8),
    '&:first-child': {
      paddingLeft: '0',
    },
    '&:last-child': {
      paddingRight: '0',
    },
  },
});

export default styles;
