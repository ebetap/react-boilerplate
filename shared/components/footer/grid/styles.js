const styles = theme => ({
  root: {},
  heading: {
    fontSize: theme.utils.toRem(16),
    fontWeight: '600',
    marginBottom: theme.utils.toRem(10),
  },
  ul: {
    padding: '0',
    margin: '0',
    listStyle: 'none',
  },
  list: {
    marginBottom: theme.utils.toRem(5),
  },
});

export default styles;
