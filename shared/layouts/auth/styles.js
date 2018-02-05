const styles = theme => ({
  root: {},
  illustration: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationImage: {
    maxWidth: theme.utils.toRem(300),
  },
  heading: {
    color: '#333',
    fontSize: theme.utils.toRem(26),
    textAlign: 'center',
    lineHeight: '1',
    marginBottom: theme.utils.toRem(15),
  },
  description: {
    maxWidth: theme.utils.toRem(360),
    margin: '0 auto',
    textAlign: 'center',
    marginBottom: theme.utils.toRem(30),
  },
  form: {
    maxWidth: theme.utils.toRem(300),
    margin: '0 auto',
  },
});

export default styles;
