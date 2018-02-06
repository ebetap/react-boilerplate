const styles = theme => ({
  root: {
    overflow: 'hidden',
    borderRadius: theme.utils.toRem(3),
    border: theme.utils.toRem('1px solid #e8eaed'),
    boxShadow: theme.utils.toRem('0 1px 2px #ddd'),
    background: '#fff',
    position: 'relative',
  },
});

export default styles;
