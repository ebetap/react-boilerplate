# Orion Blog

## Issues
1. JSS on development won't detach
Edit `node_modules/material-ui/styles/withStyles.js`
on `detach` function, change `if (sheetManagerTheme.refs === 0)` to `if (sheetManagerTheme.refs <= 1)`
