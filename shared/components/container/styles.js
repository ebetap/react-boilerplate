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
});

export default styles;
