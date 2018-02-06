const styles = theme => ({
  root: {
    maxWidth: theme.utils.toRem(1000),
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: theme.utils.toRem(15),
    paddingRight: theme.utils.toRem(15),
  },
  wide: {
    maxWidth: theme.utils.toRem(1440),
  },
  narrow: {
    maxWidth: theme.utils.toRem(500),
  },
});

export default styles;
