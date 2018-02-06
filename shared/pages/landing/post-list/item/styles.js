const styles = theme => ({
  root: {
    border: theme.utils.toRem('1px solid #eaecef'),
    height: '100%',
    padding: theme.utils.toRem(15),
    borderRadius: theme.utils.toRem(3),
    backgroundColor: '#fff',
    display: 'block',
    color: 'inherit',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      boxShadow: theme.utils.toRem('0 1px 15px rgba(27,31,35,0.15)'),
      transform: 'scale(1.025)',
    },
  },
  image: {
    paddingBottom: '60%',
    display: 'block',
    backgroundSize: 'cover',
    marginBottom: theme.utils.toRem(12),
  },
  name: {
    color: '#333',
    fontWeight: '500',
  },
  description: {
    margin: '0',
  },
});

export default styles;
