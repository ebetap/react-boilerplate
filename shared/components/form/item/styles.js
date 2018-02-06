const styles = theme => ({
  root: {
    marginBottom: theme.typography.pxToRem(12),
    marginTop: theme.typography.pxToRem(12),
    '&:first-child': {
      marginTop: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  columnSplit: {
    display: 'flex',
    marginLeft: theme.typography.pxToRem(-15),
    marginRight: theme.typography.pxToRem(-15),
  },
  columnSplitGrid: {
    paddingLeft: theme.typography.pxToRem(15),
    paddingRight: theme.typography.pxToRem(15),
    flex: 1,
  },
});

export default styles;
