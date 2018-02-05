const styles = theme => ({
  header: {
    paddingTop: theme.utils.toRem(12),
    paddingBottom: theme.utils.toRem(12),
    borderTop: theme.utils.toRem('1px solid #eaecef'),
    borderBottom: theme.utils.toRem('1px solid #eaecef'),
    borderRadius: '0',
    boxShadow: theme.utils.toRem('0 0 4px rgba(0,0,0,0.05)'),
  },
  logoImage: {
    display: 'inline-block',
    verticalAlign: 'top',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    minWidth: theme.utils.toRem(300),
  },
  navbarMenu: {
    padding: theme.utils.toRem(0, 20),
    fontWeight: '600',
  },
  leftside: {
    display: 'flex',
    alignItems: 'center',
  },
  rightside: {
    justifyContent: 'flex-end',
  },
  profileImage: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '600',
    padding: theme.utils.toRem(4, 15),
    paddingRight: '0',
    border: '0',
    background: 'transparent',
    color: '#333',
    cursor: 'pointer',
    outline: '0',
  },
  profileImageImg: {
    width: theme.utils.toRem(25),
    height: theme.utils.toRem(25),
    maxWidth: '100%',
    borderRadius: '50%',
    marginLeft: theme.utils.toRem(5),
  },
  logo: {
    paddingRight: theme.utils.toRem(8),
  },
  authButtonItem: {
    outline: '0',
    border: '0',
    borderRadius: theme.utils.toRem(40),
    padding: theme.utils.toRem(9, 15),
    lineHeight: '1',
    fontWeight: '600',
    cursor: 'pointer',
    color: '#333',
  },
  authButtonSignup: {
    background: '#de6151',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: theme.utils.toRem(12),
    lineHeight: '1',
    display: 'inline-block',
  },
  authButtonSignin: {
    background: 'transparent',
  },
  link: {
    color: '#1a1f21',
  },
});

export default styles;
