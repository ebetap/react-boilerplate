const styles = theme => ({
  root: {
    paddingBottom: theme.utils.toRem(35),
    borderTop: theme.utils.toRem('1px solid #eaecef'),
    paddingTop: theme.utils.toRem(40),
    marginTop: theme.utils.toRem(-1),
    backgroundColor: '#202e3c',
    color: '#fff',
  },
  row: {
    display: 'flex',
    marginLeft: theme.utils.toRem(-8),
    marginRight: theme.utils.toRem(-8),
  },
  grid: {
    flex: 1,
    paddingLeft: theme.utils.toRem(8),
    paddingRight: theme.utils.toRem(8),
  },
  link: {
    color: '#fff',
  },
});

export default styles;
