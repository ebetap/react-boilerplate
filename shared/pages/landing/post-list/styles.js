const styles = theme => ({
  root: {
    paddingTop: theme.utils.toRem(30),
    borderBottom: theme.utils.toRem('1px solid #eaecef'),
    paddingBottom: theme.utils.toRem(15),
  },
  items: {
    display: 'flex',
    marginLeft: theme.utils.toRem(-7),
    marginRight: theme.utils.toRem(-7),
    flexWrap: 'wrap',
  },
  item: {
    width: '25%',
    paddingLeft: theme.utils.toRem(7),
    paddingRight: theme.utils.toRem(7),
    marginBottom: theme.utils.toRem(20),
  },
});

export default styles;
